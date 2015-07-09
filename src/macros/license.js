

function singleLicense(name) {
    return ` - **${name}** : https://spdx.org/licenses/${name}.html`;
}
export default function license(options, scope) {
    if (scope.pkg.license) {
        return singleLicense(scope.pkg.license);
    } else if (scope.pkg.licenses) {
        return scope.pkg.licenses.map(licence=>singleLicense(licence.type)).join('\;');
    }
}
