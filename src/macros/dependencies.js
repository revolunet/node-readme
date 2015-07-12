

function singleDep(name, version, dev=false) {
    let check = dev?'✔':'✖';
    return `[${name}](https://www.npmjs.com/package/${name}) | ${version} | ${check}`;
}

function dependenciesList(obj, dev=false) {
    return Object.keys(obj).map(name => {
        return singleDep(name, obj[name], dev);
    });
}

export default function dependencies(options, scope) {
    let dependencies = [...dependenciesList(scope.pkg.dependencies), ...dependenciesList(scope.pkg.devDependencies, true)];
    return `Package | Version | Dev
--- |:---:|:---:
${dependencies.join('\n')}
`;

}
