'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = license;

function singleLicense(name) {
    return ' - **' + name + '** : https://spdx.org/licenses/' + name + '.html';
}

function license(options, scope) {
    if (scope.pkg.license) {
        return singleLicense(scope.pkg.license);
    } else if (scope.pkg.licenses) {
        return scope.pkg.licenses.map(function (licence) {
            return singleLicense(licence.type);
        }).join(';');
    }
}

module.exports = exports['default'];