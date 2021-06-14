const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy('dist');
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addCollection('nav', function (collection) {
    return collection.getFilteredByTag('menu')
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter('stringify', function (value) {
    console.log(value);
    if (value && typeof value.to_liquid === 'function') {
      return stringify(value.to_liquid());
    }

    if (Object.prototype.toString.call(value) === '[object String]') {
      return value;
    }

    return JSON.stringify(value);
  });

  return {
    pathPrefix: '/frontend-toolkit',

    dir: {
      input: 'docs',
      output: '_site'
    }
  };
};
