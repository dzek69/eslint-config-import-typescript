"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

const rules = {
    "import/export": OFF,
    "import/named": OFF,
    "import/default": OFF,
    "import/namespace": OFF,
    "@typescript-eslint/no-duplicate-imports": OFF,
};

module.exports = {
    rules: {
        ...rules,
    },
};
