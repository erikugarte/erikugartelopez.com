const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

    // Markdown renderer for EN body stored in frontmatter
    const md = markdownIt({ html: true, breaks: false, linkify: false });
    eleventyConfig.addFilter("md", function(content) {
        if (!content) return "";
        return md.render(content);
    });

    // Date formatting filters
    eleventyConfig.addFilter("dateEs", function(date) {
        const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        const d = new Date(date);
        return months[d.getMonth()] + " " + d.getFullYear();
    });
    eleventyConfig.addFilter("dateEn", function(date) {
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const d = new Date(date);
        return months[d.getMonth()] + " " + d.getFullYear();
    });

    eleventyConfig.addFilter("dateISO", function(date) {
        return new Date(date).toISOString().split('T')[0];
    });

    // Collection: cuaderno posts sorted by date
    eleventyConfig.addCollection("cuaderno", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/cuaderno/*.md").sort((a, b) => {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    // Pass through static files
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/favicon-32.png");
    eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("src/ballena-cover.jpg");
    eleventyConfig.addPassthroughCopy("src/erik-ugarte.jpg");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/admin");

    // Markdown config for post bodies (ES)
    eleventyConfig.setLibrary("md", md);

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
