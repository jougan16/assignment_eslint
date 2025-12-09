// eslint.config.cjs
module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "security",
        "redos",
        "regexp"
    ],
    extends: [],
    rules: {
        // RULES KHUSUS REDoS
        "redos/no-vulnerable": "error",
        "security/detect-non-literal-regexp": "error",
        "regexp/no-super-linear-backtracking": "warn",

        // RULE lainnya untuk keamanan
        "security/detect-eval-with-expression": "warn",
        "security/detect-non-literal-fs-filename": "warn"
    }
};
