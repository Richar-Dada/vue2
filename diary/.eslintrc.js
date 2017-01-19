module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      "jsx": true
    }
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  env: {
    "es6": true,
    "browser": true,
    "jasmine": true,
    "node": true,
  },
  ecmaFeatures: {
    "modules": true
  },
  globals: {
    "vue": true,
    "module": true,
    "inject": true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-unused-vars": 0,
    "no-alert": 1,
    "no-mixed-spaces-and-tabs": 0
  }
}
