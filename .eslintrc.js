module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
   
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest",
        "prettier"
    ],
    "rules": {
        "no-restricted-syntax": [
            "error",
            "LabeledStatement",
            "WithStatement"
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
    
}