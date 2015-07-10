
function image(src, title='') {
    return `![${title}](${src})`;
}

const badges = {
    'npm': scope => {
        return image(`https://img.shields.io/npm/v/${scope.pkg.name}.svg`, 'npm');
    },
    'nodei': scope => {
        return image(`https://nodei.co/npm/${scope.pkg.name}.png?downloads=true&downloadRank=true&stars=true`, 'nodei.co');
    },
    'travis-status': scope => {
        return image(`https://img.shields.io/travis/${scope.pkg.repository}.svg`, 'travis-status');
    },
    'github-issues': scope => {
        return image(`https://img.shields.io/github/issues/${scope.pkg.repository}.svg`, 'github-issues');
    },
    'license': scope => {
        return image(`https://img.shields.io/npm/l/${scope.pkg.name}.svg`, 'license');
    },
    'github-stars': scope => {
        return image(`https://img.shields.io/github/stars/${scope.pkg.repository}.svg`, 'stars');
    },
    'github-forks': scope => {
        return image(`https://img.shields.io/github/forks/${scope.pkg.repository}.svg`, 'forks');
    },
    'circleci': scope => {
        return image(`https://circleci.com/gh/${scope.pkg.repository}.svg?style=svg`, 'Circle CI build status');
    }
};

export default function badge(type, scope) {
    return badges[type]?badges[type](scope):'';
}
