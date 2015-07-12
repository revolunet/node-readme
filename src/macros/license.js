var licenseUrl = require('oss-license-name-to-url');

function singleLicense(name) {
    var url = licenseUrl(name);
    return ` - **${name}** : ${url}`;
}

export default function license(options, scope) {
    if (scope.pkg.license) {
        return singleLicense(scope.pkg.license);
    } else if (scope.pkg.licenses) {
        return scope.pkg.licenses.map(license=>singleLicense(license.type)).join('\;');
    }
}
