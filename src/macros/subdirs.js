var path = require('path');
var fs = require('fs');


var walk = function(dir) {
  var results = []
  var list = fs.readdirSync(dir)
  list.forEach(function(file) {
      file = dir + '/' + file
      var stat = fs.statSync(file)
      if (stat && stat.isDirectory()) results = results.concat(walk(file))
      else results.push(file)
  })
  return results
}

export default function subdirs(options, scope) {
  const subdir = options || ''
  var basePath = path.resolve('.', subdir)
  var readmes = walk(basePath)
  const struct = readmes.reduce((acc, filepath) => {
    const relativePath = filepath.replace(basePath + '/', '')
    const componentName = relativePath.split('/').slice(0, 1)[0]
    const firstLetter = componentName[0]
    if (/\./i.test(componentName)) {
      return acc
    }
    if (firstLetter.toUpperCase() !== firstLetter) {
      return acc
    }
    if (!acc.hasOwnProperty(componentName)) {
      acc[componentName] = true
    }
    if (/readme\.md/i.test(relativePath)) {
      acc[componentName] = true
    }
    return acc
  }, {})
  return Object.keys(struct).map(key => {
    if (struct[key]) {
      return `- [${key}](${subdir}/${key})`
    }
    return `- ${key}`
  }).join('\n')
}
