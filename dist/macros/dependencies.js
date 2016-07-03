'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = dependencies;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function singleDep(name, version) {
    var dev = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var check = dev ? '✔' : '✖';
    return '[' + name + '](https://www.npmjs.com/package/' + name + ') | ' + version + ' | ' + check;
}

function dependenciesList(obj) {
    var dev = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    if (!obj) {
        obj = {};
    }
    return Object.keys(obj).map(function (name) {
        return singleDep(name, obj[name], dev);
    });
}

function dependencies(options, scope) {
    var dependencies = [].concat(_toConsumableArray(dependenciesList(scope.pkg.dependencies)), _toConsumableArray(dependenciesList(scope.pkg.devDependencies, true)));
    return 'Package | Version | Dev\n--- |:---:|:---:\n' + dependencies.join('\n') + '\n';
}

module.exports = exports['default'];