'use strict'
const path = require('path')

module.exports = {
  '*.{json,yml,yaml,css}': 'prettier --write',
  './src/*.html': [
    'prettier --write'
  ],
  './src/app/**/*.html': [
    'prettier --write',
    absolutePaths => {
      const relativePaths = absolutePaths.map(file => path.relative(process.cwd(), file))
      return 'ng lint --fix --format stylish ' + relativePaths.map(file => '--files ' + file).join(' ')
    }
  ],
  '*.ts': absolutePaths => {
    const relativePaths = absolutePaths.map(file => path.relative(process.cwd(), file))
    return 'ng lint --fix --format stylish ' + relativePaths.map(file => '--files ' + file).join(' ')
  },
  '*.js': 'eslint --fix --format stylish'
}
