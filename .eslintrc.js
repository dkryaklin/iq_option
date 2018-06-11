module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "rules": {
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/no-did-update-set-state": "off",
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
        'import/prefer-default-export': 'off',
    }
};
