var CWD = require('process').cwd();
var fs = require('fs');
var express = require('express');
var marked = require('meta-marked');
var path = require('path');
var _ = require('underscore');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var Headings = require(path.join(CWD, 'lib/headings.json'));

    res.render('index', {
      title: 'Teach Me Product',
      headings: Headings
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        title: 'About | Teach Me Product'
    });
});

router.get('/resources', function (req, res) {
    res.render('resources', {
        title: 'Resources | Teach Me Product'
    });
});

router.get('/modules/:folder/:moduleName', function (req, res) {
    var Headings = require(path.join(CWD, 'lib/headings.json'));
    var folder = req.params.folder;
    var mod = req.params.moduleName;


    var mdFolder = path.join(CWD, 'markdown/');

    var heading;
    var moduleNumber;
    var subheadings = [];
    var footnotes = [];
    var renderer = new marked.Renderer();

    renderer.image = function (href, title, text) {
        return '<div class="image-wrapper">' +
            "<img src='" + href + "' alt='" + title + "'>'" +
            "<p class='image-caption'>" + text + '</p>';
    }

    renderer.link = function (href, title, text) {
        var lowerText = text.toLowerCase();
        var data;
        var length = footnotes.length + 1;

        if (title === 'Caption') {
            return '<aside class="image-caption"><a href="' + href + '" target="_blank">' + text + '</a></aside>';
        }

        else if (lowerText.indexOf('source') > -1) {
            data = {
                href: href,
                title: title,
                text: text,
                number: length
            };

            footnotes.push(data);

            return '<span class="link-source"><a class="link-souce--link" href="#fn-' + (data.number) + '"><sup>' + data.number + '</sup></a></span>';
        }
        else {
            return '<a href="' + href + '" target="_blank">' + text + '</a>';
        }

    }

    renderer.heading = function (text, level) {
        var dashSpaced = text.replace(/[^A-Z0-9]/ig, "-").toLowerCase();
        var submoduleNumber;
        if (level === 1) {
            moduleNumber = parseInt(text.match(/(\d+)/)[0]);
            heading = {
                moduleNumber: moduleNumber,
                anchor: '#' + dashSpaced,
                text: text
            };
            return '<h1 class="heading" id="' + dashSpaced + '">' + text + '</h1>';
        }
        else if (level === 2) {
            submoduleNumber = subheadings.length+1;
            subheadings.push({
                anchor: '#' + dashSpaced,
                text: text,
                moduleNumber: moduleNumber,
                submoduleNumber: submoduleNumber
            });

            if (submoduleNumber === 1) {
                return '<div class="submodule" id="' + dashSpaced + '"><h2 class="subheading">' + moduleNumber + "." + submoduleNumber + " " + text + '</h2>';
            }
            else {
                return '</div><div class="submodule" id="' + dashSpaced + '"><h2 class="subheading">' + moduleNumber + "." + submoduleNumber + " " + text + '</h2>';
            }
        }
        else {
            return '<h' + level + ' id="' + dashSpaced + '">' + text + '</h' + level + '>';
        }
    };

    fs.readFile(path.join(mdFolder, folder, mod + '.md'), 'utf8', (err, contents) => {
        if (err) {
            res.render('error', {
                message: 'Module not found.'
            });
        }

        else {
            var content = marked(contents, { renderer: renderer });
            var moduleDir = _.findWhere(Headings, {name: folder});
            var submoduleIdx = _.findIndex(moduleDir.modules, function (v) {
                return v.link === mod;
            });
            console.log(moduleDir.modules[submoduleIdx + 1] );
            res.render('module', {
                content: content.html,
                heading: heading,
                subheadings: subheadings,
                footnotes: footnotes,
                currentModule: folder,
                currentModule: mod,
                prevSubmodule: moduleDir.modules[submoduleIdx - 1] || null,
                nextSubmodule: moduleDir.modules[submoduleIdx + 1] || null
                //nextModule: moduleDir.children[submoduleIdx - 1]
                // prevModule:
            });
        }
    });
});

router.get('/compile', function (req, res) {

    var folderStructure = dirTree(path.join(CWD, 'markdown/'));
    var filePath = path.join(CWD, 'lib/headings.json');
    var headings = [];
    folderStructure.children.forEach(function (fo) {
        if (fo.type === 'folder') {

            fo.displayName = fo.name.split('_')[1].replace(/-/g, ' ');
            fo.modules = [];

            fo.children.forEach(function (f) {
                if (f.type === 'file' && f.name.indexOf('Store') === -1) {
                    var contentMd = fs.readFileSync(f.path, 'utf-8');
                    var content = marked(contentMd);
                    var contentHtml = content.html;

                    fo.modules.push({
                        text: f.name.split('_')[1].replace(/-/g, ' ').replace('.md', ''),
                        draft: content.meta.Draft,
                        link: f.name.replace('.md', ''),
                        excerpt: content.meta.Excerpt
                    });
                }
            });
            headings.push(fo);
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(headings, null, 4));
    res.status(200).json({done: true, message: 'Generated new headings'});
});

router.get('/getFiles/:folder', function (req, res) {
    var j = dirTree(path.join(CWD, 'markdown', req.params.folder || ''));

    return res.status(200).json(j);
});


function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
    }

    return info;
}



function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function(filename) {
            fs.readFile(dirname + filename, 'utf-8', function(err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename, content);
            });
        });
    });
}

module.exports = router;
