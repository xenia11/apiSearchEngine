module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current",
                },
                modules: false,
            },
        ],
    ],
    plugins: ["@babel/plugin-transform-modules-commonjs"],
    sourceType: "module",
};
