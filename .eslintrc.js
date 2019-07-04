module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    'BigInt': true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": 0,
    "no-constant-condition": 0,
    "no-unused-vars": 0
  }
};