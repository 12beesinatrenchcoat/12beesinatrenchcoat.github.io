const util = require('util');
const _ = require("lodash");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets")
	eleventyConfig.addPassthroughCopy("CNAME")
	eleventyConfig.addPassthroughCopy("favicon.svg")
	eleventyConfig.addPassthroughCopy("favicon.ico")

	eleventyConfig.addFilter("formatDate", date => formatDate(date))

	// <3 https://github.com/11ty/eleventy/issues/266#issuecomment-716176366
	eleventyConfig.addFilter('console', function(value) {
		return util.inspect(value);
	});

	eleventyConfig.addFilter("limit", (arr, limit) => {
		return arr.slice(0, limit);
	});

	eleventyConfig.addFilter("projectStatus", status => {
		switch(status) {
			case "wip":
				return "work in progress"
			case "on_hold":
				return "on hold…"
			case "scrapped":
				return "scrapped :("
			case "complete":
				return "complete! :D"
			default:
				return String(status) + "?"
		}
	})

	eleventyConfig.addGlobalData("generated", () => {
		const now = new Date();
		return formatDate(now);
	})

	eleventyConfig.addCollection("posts", (collection) => {
		return posts = collection.getFilteredByGlob("blog/*.md");
	})

	// <3 https://darekkay.com/blog/eleventy-group-posts-by-year/
	eleventyConfig.addCollection("postsByYear", (collection) => {
		return posts = _.chain(collection.getFilteredByGlob("blog/*.md"))
			.groupBy((post) => post.date.getFullYear())
			.toPairs()
			.reverse()
			.value();
	})

	eleventyConfig.addCollection("projects", (collection) => {
		return collection.getFilteredByGlob("projects/*.md");
	})

	eleventyConfig.addPlugin(require("eleventy-plugin-toc"), {
		tags: ["h1", "h2", "h3"]
	})

	const options = {
		html: true,
		breaks: true
	}

	const markdownLibrary = require("markdown-it")(options)
		.use(require("markdown-it-anchor"))
		.use(require("markdown-it-attrs"))

	eleventyConfig.setLibrary("md", markdownLibrary);

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts"
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	}
};

/**
 * @arg {Date} date
 * @returns {string}
 */
function formatDate(date) {
	if (!date) { return "???" }
	if (typeof date !== "object") {return date}
	date = new Date(date);
	date = new Date(date.valueOf() + (date.getTimezoneOffset() * 60000));
	return date.toLocaleDateString("en-us", {
		 year:"numeric",
		 month:"short",
		 day:"numeric"
	});
}
