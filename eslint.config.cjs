const security = require("eslint-plugin-security");
const redos = require("eslint-plugin-redos");
const regexp = require("eslint-plugin-regexp");

module.exports = [
    {
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },

        plugins: {
            security,
            redos,
            regexp
        },

        rules: {
            // MATIKAN plugin ReDoS yang pakai JAR
            "redos/no-vulnerable": "off",

            // Gunakan plugin regexp untuk deteksi pola super-linear / ReDoS
            "regexp/no-super-linear-backtracking": "error",

            "security/detect-non-literal-regexp": "error",
            "security/detect-eval-with-expression": "warn",
            "security/detect-non-literal-fs-filename": "warn"
        }
    }
];
