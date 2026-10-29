// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");
const prettier = require("eslint-config-prettier/flat");

module.exports = defineConfig([
  expoConfig,
  prettier,
  {
    ignores: ["dist/*"],
  }
]);
