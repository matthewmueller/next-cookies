module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    node: true,
    browser: true,
    es6: false
  },
  rules: {
    "prettier/prettier": "warn"
  }
};
