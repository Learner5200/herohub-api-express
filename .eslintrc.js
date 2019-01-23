module.exports = {
    "extends": "airbnb-base",
    "plugins": [
      "mocha"
    ],
    "env": {
      "mocha": true
    },
    "rules": {
      "no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "should|expect"
        }
      ]
    }
};
