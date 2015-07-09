'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = author;

function singleAuthor(name) {
    return ' - **' + name + '** : https://spdx.org/licenses/' + name + '.html';
}

function author(options, scope) {
    if (typeof scope.pkg.author === 'string') {
        return scope.pkg.author;
    } else if (typeof scope.pkg.author === 'object') {
        return scope.pkg.author.name + ' <' + scope.pkg.author.email + '> ' + scope.pkg.author.url;
    }
}

module.exports = exports['default'];