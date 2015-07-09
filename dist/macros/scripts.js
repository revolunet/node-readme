'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = scripts;

function scripts(options, scope) {
    var scripts = scope.pkg.scripts;
    if (scripts && Object.keys(scripts).length > 0) {
        return '' + Object.keys(scripts).map(function (key, index) {
            return ' - **npm run ' + key + '** : `' + scripts[key] + '`';
        }).join('\n');
    }
    return '';
}

module.exports = exports['default'];