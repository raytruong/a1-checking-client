module.exports = {
    transpileDependencies: ["vuetify"],
    publicPath:
        process.env.NODE_ENV === "production" ? "/a1-checking-front" : "",
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                appId: "A1-Checking-Client",
                linux: {
                    target: {
                        target: "AppImage",
                        arch: ["armv7l", "x64"],
                    },
                },
                win: {
                    target: {
                        target: "NSIS",
                        arch: ["x64"],
                    },
                },
            },
        },
    },
};
