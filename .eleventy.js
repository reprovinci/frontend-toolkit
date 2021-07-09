const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy('dist');
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter('highlight', function (myVariable, lang = 'html') {
    let html = Prism.highlight(myVariable, Prism.languages[lang], lang);
    html = `<pre class="language-${lang}"><code class="language-${lang}">${html}</code></pre>`;

    return html;
  });

  eleventyConfig.addCollection('nav', function (collection) {
    return collection.getFilteredByTag('menu')
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter('date', (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale('nl-NL')
      .toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter('stringify', function (value) {
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
