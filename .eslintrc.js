module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/base",
        "plugin:vue/essential",
        "plugin:vue/recommended",
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/prettier",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "prefer-const": "error",
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
