module.exports = {
  root: true,
  ignorePatterns: ["dist"],
  overrides: [
    {
      // .ts|.tsx files
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "prettier/prettier": 1,
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-empty-function": "off",
      },
      files: ["src/**/*.ts", "src/**/*.tsx"],
    },
    {
      // .js files
      extends: ["prettier"],
      files: "*.js",
      rules: {},
    },
    {
      // .cjs files
      extends: ["prettier"],
      files: "*.cjs",
      rules: {},
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        tsconfigRootDir: __dirname,
      },
    },
    {
      // .json files
      extends: ["prettier"],
      files: "*.json",
      rules: {},
    },
  ],
};
