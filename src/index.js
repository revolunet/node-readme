
import path from 'path';
import fs from 'fs'
import template from 'es6-template-strings';
import * as macros from "./macros";

/**
 * convert input ES6 template and convert to markdown
 * - adds some data in template scope and macros from ./macros
 */
function toMarkdown(templateContents, data) {
    // bould all functions in ./macros and pass the current scope (data + macros)
    let boundMacros = {};
    Object.keys(macros).forEach((key, idx) => {
      boundMacros[key] = options => macros[key](options, scope);
    });
    let scope = { ...data, ...boundMacros};
    let markdown = template(templateContents, scope);
    return markdown;
}

/**
 * Generates markdown from given ES6 template file
 * resolve the path from root project directory
 * fallbacks to default if any
 */
function compile(userPath, fallbackPath, cb) {
    let userTemplate = path.join(process.cwd(), userPath);
    fs.exists(userTemplate, function (exists) {
        let sourceTemplate = exists ? userTemplate : fallbackPath ? fallbackPath : null;
        if (sourceTemplate) {
            fs.readFile(sourceTemplate, function (err, contents) {
                if (err) {
                    throw 'cannot read ' + sourceTemplate;
                }
                let data = {
                    pkg: require(path.join(process.cwd(), 'package.json'))
                };
                cb(toMarkdown(contents, data));
            });
            return;
        }
        cb();
    });
}

/**
 * create the `README.md` file from the main template
 * `.README.md` is the current directory
 * or the default node-readme `src/.README.md` template
 */
function createReadme(overwrite=true) {
    compile('.README.md', path.join(__dirname, './.README.md'), function(markdown) {
        let destination = path.join(process.cwd(), './README.md');
        fs.exists(destination, function (exists) {
            if (exists && !overwrite) {
                throw destination + ' already exists';
            }
            fs.writeFile(destination, markdown, function (err) {
              if (err) throw err;
              console.log('README.md created');
            });
        });
    });
}

export default {
    generate: createReadme
};
