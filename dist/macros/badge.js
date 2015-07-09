'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = badge;

function image(src) {
    var title = arguments[1] === undefined ? '' : arguments[1];

    return '![' + title + '](' + src + ')';
}

var badges = {
    'npm': function npm(scope) {
        return image('https://img.shields.io/npm/v/' + scope.pkg.name + '.svg', 'npm');
    },
    'nodei': function nodei(scope) {
        return image('https://nodei.co/' + scope.pkg.repository + '.png?downloads=true&downloadRank=true&stars=true', 'nodei.co');
    },
    'travis-status': function travisStatus(scope) {
        return image('https://img.shields.io/travis/' + scope.pkg.repository + '.svg', 'travis-status');
    },
    'github-issues': function githubIssues(scope) {
        return image('https://img.shields.io/github/issues/' + scope.pkg.repository + '.svg', 'github-issues');
    },
    'github-licence': function githubLicence(scope) {
        return image('https://img.shields.io/github/license/' + scope.pkg.repository + '.svg', 'licence');
    },
    'github-stars': function githubStars(scope) {
        return image('https://img.shields.io/github/stars/' + scope.pkg.repository + '.svg', 'stars');
    },
    'github-forks': function githubForks(scope) {
        return image('https://img.shields.io/github/forks/' + scope.pkg.repository + '.svg', 'forks');
    }
};

function badge(type, scope) {
    return badges[type](scope);
}

module.exports = exports['default'];