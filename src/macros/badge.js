
function image(src, title='') {
    return `![${title}](${src})`;
}

function getRepoPath(npmRepository) {
    let githubRepo;
    const re = /^.*[\/:]([^/]+\/[^/]+?)(\.git)?$/i;

    if (typeof npmRepository === 'string') {
        githubRepo = npmRepository;
    } else {
        githubRepo = npmRepository.url;
    }
    if (githubRepo.indexOf('http') === 0 || githubRepo.indexOf('git') === 0 ) {
        return githubRepo.match(re)[1];
    }
    return githubRepo;
}

const badges = {
    'npm': scope => {
        return image(`https://img.shields.io/npm/v/${scope.pkg.name}.svg`, 'npm');
    },
    'nodei': scope => {
        return image(`https://nodei.co/npm/${scope.pkg.name}.png?downloads=true&downloadRank=true&stars=true`, 'nodei.co');
    },
    'travis-status': scope => {
        return image(`https://img.shields.io/travis/${getRepoPath(scope.pkg.repository)}.svg`, 'travis-status');
    },
    'github-issues': scope => {
        return image(`https://img.shields.io/github/issues/${getRepoPath(scope.pkg.repository)}.svg`, 'github-issues');
    },
    'license': scope => {
        return image(`https://img.shields.io/npm/l/${scope.pkg.name}.svg`, 'license');
    },
    'github-stars': scope => {
        return image(`https://img.shields.io/github/stars/${getRepoPath(scope.pkg.repository)}.svg`, 'stars');
    },
    'github-forks': scope => {
        return image(`https://img.shields.io/github/forks/${getRepoPath(scope.pkg.repository)}.svg`, 'forks');
    },
    'circleci': scope => {
        return image(`https://circleci.com/gh/${getRepoPath(scope.pkg.repository)}.svg?style=svg`, 'Circle CI build status');
    }
};

export default function badge(type, scope) {
    return badges[type]?badges[type](scope):'';
}
