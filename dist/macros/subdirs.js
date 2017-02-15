'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = subdirs;
var path = require('path');
var fs = require('fs');

var walk = function walk(dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));else results.push(file);
  });
  return results;
};

function subdirs(options, scope) {
  var subdir = options || '';
  var basePath = path.resolve('.', subdir);
  var readmes = walk(basePath);
  var struct = readmes.reduce(function (acc, filepath) {
    var relativePath = filepath.replace(basePath + '/', '');
    var componentName = relativePath.split('/').slice(0, 1)[0];
    var firstLetter = componentName[0];
    if (/\./i.test(componentName)) {
      return acc;
    }
    if (!acc.hasOwnProperty(componentName)) {
      acc[componentName] = true;
    }
    if (/readme\.md/i.test(relativePath)) {
      acc[componentName] = true;
    }
    return acc;
  }, {});
  return Object.keys(struct).map(function (key) {
    if (struct[key]) {
      return '- [' + key + '](' + subdir + '/' + key + ')';
    }
    return '- ' + key;
  }).join('\n');
}

module.exports = exports['default'];