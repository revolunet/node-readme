'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = badge;

function image(src) {
    var title = arguments[1] === undefined ? '' : arguments[1];

    return '![' + title + '](' + src + ')';
}

function getRepoPath(npmRepository) {
    var githubRepo = undefined;
    var re = /^.*[\/:]([^/]+\/[^/]+?)(\.git)?$/i;

    if (typeof npmRepository === 'string') {
        githubRepo = npmRepository;
    } else {
        githubRepo = npmRepository.url;
    }
    if (githubRepo.indexOf('http') === 0 || githubRepo.indexOf('git') === 0) {
        return githubRepo.match(re)[1];
    }
    return githubRepo;
}

var badges = {
    'npm': function npm(scope) {
        return image('https://img.shields.io/npm/v/' + scope.pkg.name + '.svg', 'npm');
    },
    'nodei': function nodei(scope) {
        return image('https://nodei.co/npm/' + scope.pkg.name + '.png?downloads=true&downloadRank=true&stars=true', 'nodei.co');
    },
    'travis-status': function travisStatus(scope) {
        return image('https://img.shields.io/travis/' + getRepoPath(scope.pkg.repository) + '.svg', 'travis-status');
    },
    'github-issues': function githubIssues(scope) {
        return image('https://img.shields.io/github/issues/' + getRepoPath(scope.pkg.repository) + '.svg', 'github-issues');
    },
    'license': function license(scope) {
        return image('https://img.shields.io/npm/l/' + scope.pkg.name + '.svg', 'license');
    },
    'github-stars': function githubStars(scope) {
        return image('https://img.shields.io/github/stars/' + getRepoPath(scope.pkg.repository) + '.svg', 'stars');
    },
    'github-forks': function githubForks(scope) {
        return image('https://img.shields.io/github/forks/' + getRepoPath(scope.pkg.repository) + '.svg', 'forks');
    },
    'circleci': function circleci(scope) {
        return image('https://circleci.com/gh/' + getRepoPath(scope.pkg.repository) + '.svg?style=svg', 'Circle CI build status');
    }
};

function badge(type, scope) {
    return badges[type] ? badges[type](scope) : '';
}

module.exports = exports['default'];