requirejs.config({
    baseUrl: commonApp.scriptRoot,
    paths: {
        text: commonApp.scriptRoot + "standard/text"
    },
    urlArgs: "bust=v" + commonApp.version
});