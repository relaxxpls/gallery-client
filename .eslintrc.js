module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },

  extends: ["next/core-web-vitals", "eslint-config-web/typescript"],
};
