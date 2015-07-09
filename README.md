# node-readme ![npm](https://img.shields.io/npm/v/node-readme.svg)

Generate and maintain your JS projects README.md files using ES6 syntax

![nodei.co](https://nodei.co/revolunet/node-readme.png?downloads=true&downloadRank=true&stars=true)

![github-issues](https://img.shields.io/github/issues/revolunet/node-readme.svg)
![licence](https://img.shields.io/github/license/revolunet/node-readme.svg)

## Features

 - reads most of the data from package.json
 - list npm commands
 - author & licence
 - use a customizable ES6 template
 - badges

## Install

`npm install --save revolunet/node-readme`

## Usage

Add a command in your package.json :
```
"scripts": {
  "readme": "node ./node_modules/node-readme/.bin/node-readme.js"
},
```

Then run `npm run readme` to update your README.md

You can copy and customize the [default README template](./src/.README.md) and add it to your project.

It uses the [Javascript ES6 syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)

## Scripts  

 - **npm run readme** : `node ./.bin/node-readme.js`
 - **npm run build** : `babel -d dist/ src/ && cp ./src/.README.md ./dist/.README.md`

## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

MIT : https://spdx.org/licenses/MIT.html
