module.exports = {
    "presets": [
        "@babel/preset-env"
    ],

    "plugins": [
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-object-rest-spread"
    ],

    "sourceMaps": (process.env.COCO_BUILD) ? true : "inline",
    "retainLines": true,

    "ignore": [
        "./fixtures"
    ]
}
