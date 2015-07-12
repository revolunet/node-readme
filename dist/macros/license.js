'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = license;
var licenseUrl = require('oss-license-name-to-url');

function singleLicense(name) {
    var url = licenseUrl(name);
    return ' - **' + name + '** : ' + url;
}

function license(options, scope) {
    if (scope.pkg.license) {
        return singleLicense(scope.pkg.license);
    } else if (scope.pkg.licenses) {
        return scope.pkg.licenses.map(function (license) {
            return singleLicense(license.type);
        }).join(';');
    }
}

module.exports = exports['default'];