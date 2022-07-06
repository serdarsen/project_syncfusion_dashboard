module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: [
      "error",
      "double",
    ],
    "no-param-reassign": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "no-shadow": "off",
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
