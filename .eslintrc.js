module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "prettier/prettier": ["error", { semi: true }, { usePrettierrc: true }],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "no-unused-vars": "warn",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
    },
};