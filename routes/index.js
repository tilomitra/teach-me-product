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

    Headings.forEach(function (h) {
        h.modules = _.sortBy(h.modules, 'number');
    });


    res.render('index', {
      title: 'Teach Me Product',
      headings: Headings,
      mixpanel: {
          pageType: 'Informational',
          pageName: 'Home'
      }
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        title: 'About | Teach Me Product',
        mixpanel: {
            pageType: 'Informational',
            pageName: 'About'
        }
    });
});

router.get('/resources', function (req, res) {
    res.render('resources', {
        title: 'Resources | Teach Me Product',
        mixpanel: {
            pageType: 'Informational',
            pageName: 'Resources'
        }
    });
});

router.get('/modules/:folder/:moduleName', function (req, res) {
    var Headings = require(path.join(CWD, 'lib/headings.json'));
    var Modules = require(path.join(CWD, 'lib/modules.json'));
    var folder = req.params.folder;
    var mod = req.params.moduleName;


    var mdFolder = path.join(CWD, 'markdown/');

    var heading;
    var moduleNumber;
    var subheadings = [];
    var footnotes = [];
    var renderer = new marked.Renderer();

    var moduleDir = _.findWhere(Headings, {name: folder});
    var submoduleIdx = _.findIndex(moduleDir.modules, function (v) {
        return v.link === mod;
    });
    var thisModule = moduleDir.modules[submoduleIdx];


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

            console.log(data);

            return '<span class="link-source"><a class="link-souce--link" href="#fn-' + (data.number) + '"><sup>' + data.number + '</sup></a></span>';
        }
        else {
            return '<a href="' + href + '" target="_blank">' + text + '</a>';
        }

    }

    renderer.heading = function (text, level) {
        var dashSpaced = text.replace(/[^A-Z0-9]/ig, "-").toLowerCase();
        var submoduleNumber;
        var moduleNumber = thisModule.number;
        if (level === 1) {
            heading = {
                anchor: '#' + dashSpaced,
                text: text
            };
            return '<h1 class="heading" id="' + dashSpaced + '"><span class="module-number">M' + moduleNumber + '</span>' + text + '</h1>';
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
            var prevSubmodule = (Modules[thisModule.number - 2] && !Modules[thisModule.number - 2].draft) ? Modules[thisModule.number - 2] : null;
            var nextSubmodule = (Modules[thisModule.number] && !Modules[thisModule.number].draft) ? Modules[thisModule.number] : null;


            res.render('module', {
                content: content.html,
                meta: content.meta,
                moduleNumber: thisModule.number,
                excerpt: content.meta.Excerpt,
                url: 'https://teachmeproduct.com/m/' + req.params.moduleName,
                heading: heading,
                subheadings: subheadings,
                title: thisModule.text,
                footnotes: footnotes,
                currentModule: folder,
                currentModule: mod,
                prevSubmodule: prevSubmodule,
                nextSubmodule: nextSubmodule,
                mixpanel: {
                    pageType: 'Module',
                    pageName: thisModule.text
                }
            });
        }
    });
});

router.get('/compile', function (req, res) {

    var folderStructure = dirTree(path.join(CWD, 'markdown/'));
    var filePath = path.join(CWD, 'lib/headings.json');
    var modulesPath = path.join(CWD, 'lib/modules.json');

    var headings = [];
    var modules = [];
    folderStructure.children.forEach(function (fo) {
        if (fo.type === 'folder') {

            fo.displayName = fo.name.split('_')[1].replace(/-/g, ' ');
            fo.modules = [];

            fo.children.forEach(function (f) {
                // a file and not .DS_Store
                if (f.type === 'file' && f.name.indexOf('Store') === -1) {
                    var contentMd = fs.readFileSync(f.path, 'utf-8');
                    var content = marked(contentMd);
                    var mod = {
                        text: content.meta.Title || f.name.split('_')[1].replace(/-/g, ' ').replace('.md', ''),
                        number: parseInt(f.name.split('_')[0]),
                        shortDescription: content.meta.ShortDescription,
                        draft: content.meta.Draft,
                        link: f.name.replace('.md', ''),
                        excerpt: content.meta.Excerpt
                    }
                    fo.modules.push(mod);
                    modules.push(mod);
                }
            });
            headings.push(fo);
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(headings, null, 4));
    fs.writeFileSync(modulesPath, JSON.stringify(modules, null, 4));
    res.status(200).json({done: true, message: 'Generated new headings and modules'});
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

module.exports = router;
