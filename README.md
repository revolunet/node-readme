# node-readme

![npm](https://img.shields.io/npm/v/node-readme.svg) ![license](https://img.shields.io/npm/l/node-readme.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/node-readme.svg)  ![Circle CI build status](https://circleci.com/gh/revolunet/node-readme.svg?style=svg)

Generate your JS project README.md using an ES6 template

![nodei.co](https://nodei.co/npm/node-readme.png?downloads=true&downloadRank=true&stars=true)

## Features

 - reads most of the data from package.json
 - list npm commands
 - author & licence
 - use a customizable ES6 template
 - badges

## Install

`npm install --save-dev node-readme`

## Usage

Add a command in your package.json :
```
"scripts": {
  "readme": "node ./node_modules/.bin/node-readme"
},
```

Then run `npm run readme` to generate your README.md.

## Custom Template

You can copy and customize the [default README template](./src/.README.md) and add it to your project as `.README.md`.

It uses the [Javascript ES6  syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) and you can use these macros and variables :

### Badges

 - `badge('npm')` : show npm version
 - `badge('nodei')` : show npm dashboard image
 - `badge('travis-status')` : show travis build status
 - `badge('license')` : show license type
 - `badge('github-issues')` : show # of github issues
 - `badge('github-stars')` : show # of github stars
 - `badge('github-forks')` : show # of github forks
 - `badge('circleci')` : show circleci status
 - `badge('codeship', 'ProjectUUID')` : show codeship build status
 - all status from [stability-badges](https://github.com/badges/stability-badges)

### Others
 - `scripts()` : list of npm scripts
 - `license()`: show license type + link
 - `dependencies()` : list of project dependencies
 - `pkg` : direct access to package.json

## Scripts  

 - **npm run readme** : `node bin/node-readme.js`
 - **npm run build** : `babel -d dist/ src/ && cp ./src/.README.md ./dist/.README.md`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[es6-template-strings](https://www.npmjs.com/package/es6-template-strings) | 1.0.0 | ✖
[es6-templates](https://www.npmjs.com/package/es6-templates) | 0.2.2 | ✖
[oss-license-name-to-url](https://www.npmjs.com/package/oss-license-name-to-url) | 1.2.1 | ✖
[babel](https://www.npmjs.com/package/babel) | 5.6.14 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | 3.1.23 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
