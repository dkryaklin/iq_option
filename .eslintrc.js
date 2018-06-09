module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "rules": {
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    }
};
