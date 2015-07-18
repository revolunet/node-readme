
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
    'npm-license': scope => {
        return image(`https://img.shields.io/npm/l/${scope.pkg.name}.svg`, 'license');
    },
    'license': scope => {
        return image(`https://img.shields.io/npm/l/${scope.pkg.name}.svg`, 'license');
    },
    'github-license': scope => {
        return image(`https://img.shields.io/github/license/${getRepoPath(scope.pkg.repository)}.svg`, 'stars');
    },
    'github-stars': scope => {
        return image(`https://img.shields.io/github/stars/${getRepoPath(scope.pkg.repository)}.svg`, 'stars');
    },
    'github-forks': scope => {
        return image(`https://img.shields.io/github/forks/${getRepoPath(scope.pkg.repository)}.svg`, 'forks');
    },
    'circleci': scope => {
        return image(`https://circleci.com/gh/${getRepoPath(scope.pkg.repository)}.svg?style=svg`, 'Circle CI build status');
    },
    'dependencies': scope => {
        return image(`https://david-dm.org/${getRepoPath(scope.pkg.repository)}/status.svg`);
    },
    'devDependencies': scope => {
        return image(`https://david-dm.org/${getRepoPath(scope.pkg.repository)}/dev-status.svg`);
    },
    'deprecated': scope => {
        return image(`http://badges.github.io/stability-badges/dist/deprecated.svg`);
        //https://david-dm.org/${getRepoPath(scope.pkg.repository)}/dev-status.svg`);
    },
    'experimental': scope => {
        return image(`http://badges.github.io/stability-badges/dist/experimental.svg`);
    },
    'unstable': scope => {
        return image(`http://badges.github.io/stability-badges/dist/unstable.svg`);
    },
    'stable': scope => {
        return image(`http://badges.github.io/stability-badges/dist/stable.svg`);
    },
    'locked': scope => {
        return image(`http://badges.github.io/stability-badges/dist/locked.svg`);
    }
};

export default function badge(type, scope) {
    return badges[type]?badges[type](scope):'';
}
