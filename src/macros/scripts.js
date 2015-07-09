

export default function scripts(options, scope) {
    let scripts = scope.pkg.scripts;
    if (scripts && Object.keys(scripts).length > 0) {
        return `${Object.keys(scripts).map((key, index)=>` - **npm run ${key}** : \`${scripts[key]}\``).join('\n')}`;
    }
    return '';
}
