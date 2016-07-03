'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _es6TemplateStrings = require('es6-template-strings');

var _es6TemplateStrings2 = _interopRequireDefault(_es6TemplateStrings);

var _macros = require("./macros");

var macros = _interopRequireWildcard(_macros);

/**
 * convert input ES6 template and convert to markdown
 * - adds some data in template scope and macros from ./macros
 */
function toMarkdown(templateContents, data) {
    // bould all functions in ./macros and pass the current scope (data + macros)
    var boundMacros = {};
    Object.keys(macros).forEach(function (key, idx) {
        boundMacros[key] = function () {
            for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
                options[_key] = arguments[_key];
            }

            return (macros[key] || function () {
                return '';
            })(options, scope);
        };
    });
    var scope = _extends({}, data, boundMacros);
    var markdown = (0, _es6TemplateStrings2['default'])(templateContents, scope);
    return markdown;
}

/**
 * Generates markdown from given ES6 template file
 * resolve the path from root project directory
 * fallbacks to default if any
 */
function compile(userPath, fallbackPath, cb) {
    var userTemplate = _path2['default'].join(process.cwd(), userPath);
    _fs2['default'].exists(userTemplate, function (exists) {
        var sourceTemplate = exists ? userTemplate : fallbackPath ? fallbackPath : null;
        if (sourceTemplate) {
            _fs2['default'].readFile(sourceTemplate, function (err, contents) {
                if (err) {
                    throw 'cannot read ' + sourceTemplate;
                }
                var data = {
                    pkg: require(_path2['default'].join(process.cwd(), 'package.json'))
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
function createReadme() {
    var overwrite = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    compile('.README.md', _path2['default'].join(__dirname, './.README.md'), function (markdown) {
        var destination = _path2['default'].join(process.cwd(), './README.md');
        _fs2['default'].exists(destination, function (exists) {
            if (exists && !overwrite) {
                throw destination + ' already exists';
            }
            _fs2['default'].writeFile(destination, markdown, function (err) {
                if (err) throw err;
                console.log('README.md created');
            });
        });
    });
}

exports['default'] = {
    generate: createReadme
};
module.exports = exports['default'];