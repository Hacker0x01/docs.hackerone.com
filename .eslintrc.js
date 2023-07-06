module.exports = {
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "babelOptions": {
      "presets": ["@babel/preset-react"]
   },
    "requireConfigFile": false,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
