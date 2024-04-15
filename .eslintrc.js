module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier" // Добавление плагина eslint-plugin-prettier
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint", // Добавление плагина eslint-plugin-prettier
        "jest" // Добавление плагина eslint-plugin-jest
    ],
    "rules": {
    },
    // Добавленная конфигурация для eslint-plugin-react
    "settings": {
        "react": {
            "version": "detect", // автоматически определить версию React
        },
    }
}
