var fs = require('fs');
var express = require('express');
var marked = require('marked');
var path = require('path');
var excerptHtml = require('excerpt-html');
var CWD = require('process').cwd();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Introduction to Software Project Management',
      headings: require(path.join(CWD, 'lib/headings.json'))
  });
});

router.get('/modules/:folder/:moduleName', function (req, res) {
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
        lowerText = text.toLowerCase();
        if (lowerText.indexOf('source') > -1) {
            footnotes.push({
                href: href,
                title: title,
                text: text,
                number: footnotes.length
            })
            return '<a href="#fn-' + (footnotes.length-1) + '"><sup>' + (footnotes.length-1) + '</sup></a>';
        }
        else {
            return '<a href="' + href + '">' + text + '</a>';
        }

    }

    renderer.heading = function (text, level) {
        var dashSpaced = text.replace(/\s+/g, '-').toLowerCase();
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
                return '<div id="' + dashSpaced + '"><h2 class="subheading">' + moduleNumber + "." + submoduleNumber + " " + text + '</h2>';
            }
            else {
                return '</div><div id="' + dashSpaced + '"><h2 class="subheading">' + moduleNumber + "." + submoduleNumber + " " + text + '</h2>';
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
            var html = marked(contents, { renderer: renderer });

            console.log(footnotes);

            res.render('module', {
                content: html,
                heading: heading,
                subheadings: subheadings,
                footnotes: footnotes
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
                if (f.type === 'file') {
                    var contentMd = fs.readFileSync(f.path, 'utf-8');
                    var contentHtml = marked(contentMd);
                    var excerpt = excerptHtml(contentHtml);
                    fo.modules.push({
                        text: f.name.split('_')[1].replace(/-/g, ' ').replace('.md', ''),
                        link: f.name.replace('.md', ''),
                        excerpt: excerpt
                    });
                }
            });
            headings.push(fo);
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(headings, null, 4));
    res.status(200).json({done: true, message: 'Generated new headings'});
});

router.get('/getFiles', function (req, res) {
    var j = dirTree(path.join(CWD, 'markdown'));

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
