import security from "eslint-plugin-security";
import redos from "eslint-plugin-redos";
import regexp from "eslint-plugin-regexp";

export default [
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

            "redos/no-vulnerable": "error",
            "security/detect-non-literal-regexp": "error",
            "regexp/no-super-linear-backtracking": "warn",


            "security/detect-eval-with-expression": "warn",
            "security/detect-non-literal-fs-filename": "warn"
        }
    }
];
