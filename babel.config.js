module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "exclude": [
                    "transform-async-to-generator",
                    "transform-regenerator"
                ]
            }
        ]
    ],
    "plugins": [
        ["transform-async-to-promises"]
    ]
}
