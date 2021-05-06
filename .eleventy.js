const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.addPassthroughCopy("dist");
    eleventyConfig.setUseGitIgnore(false);

    // eleventyConfig.addCollection("nav", function(collection) {
    //     return collection.getFilteredByTag("menu").sort((a, b) => a.data.order - b.data.order);
    // });

    return {
        pathPrefix: "/frontend-toolkit",

        dir: {
            input: "docs",
            output: "_site"
        }
    };
};