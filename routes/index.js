var fs = require('fs');
var express = require('express');
var marked = require('marked');
var path = require('path');
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
    var subheadings = [];
    var renderer = new marked.Renderer();

    renderer.image = function (href, title, text) {
        return '<div class="image-wrapper">' +
            "<img src='" + href + "' alt='" + title + "'>'" +
            "<p class='image-caption'>" + text + '</p>';
    }

    renderer.heading = function (text, level) {
        var dashSpaced = text.replace(/\s+/g, '-').toLowerCase();
        if (level === 1) {
            heading = {
                anchor: '#' + dashSpaced,
                text: text
            };
            return '<h1 class="heading" id="' + dashSpaced + '">' + text + '</h1>';
        }
        else if (level === 2) {
            subheadings.push({
                anchor: '#' + dashSpaced,
                text: text
            });
            return '<h2 class="subheading" id="' + dashSpaced + '">' + text + '</h2>';
        }
        else {
            return '<h' + level + ' id="' + dashSpaced + '">' + text + '</h' + level + '>';
        }
    };

    console.log(path.join(mdFolder, folder, mod + '.md'));

    fs.readFile(path.join(mdFolder, folder, mod + '.md'), 'utf8', (err, contents) => {
        if (err) {
            res.render('error', {
                message: 'Module not found.'
            });
        }

        else {
            var html = marked(contents, { renderer: renderer });
            res.render('module', {
                content: html,
                heading: heading,
                subheadings: subheadings
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
                    fo.modules.push({
                        text: f.name.split('_')[1].replace(/-/g, ' ').replace('.md', ''),
                        link: f.name.replace('.md', '')
                    });
                }
            });
            headings.push(fo);
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(headings, null, 4));

    res.status(200).json({done: true, message: 'Generated new headings'});


    //
    //
    // var mdFolder = path.join(CWD, 'markdown/');
    // var headingRenderer = new marked.Renderer();
    // var headings = [];
    // headingRenderer.heading = function (text, level) {
    //     if (level === 1) {
    //         headings.push({
    //             text: text,
    //             link: 'modules/' + text.split('-')[0].trim().replace(/\s+/g, '-').toLowerCase()
    //         });
    //     }
    // };
    //
    // // var folders = dirTree(mdFolder);
    // //
    // // folders.children.forEach(function (f) {
    // //     if (f.type === 'folder') {
    // //         f.children.forEach(function )
    // //     }
    // // });
    //
    // readFiles(mdFolder, function (filename, content) {
    //     var html = marked(content, { renderer: headingRenderer });
    //
    //
    //
    //
    // }, function (err) {
    //     res.status(400).json(err);
    // });

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
