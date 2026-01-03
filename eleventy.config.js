import path from "node:path";
import * as sass from "sass";
import markdownIt from "markdown-it";

export default async function (eleventyConfig) {
	eleventyConfig
		.addPassthroughCopy("src/assets")
		.addPassthroughCopy("src/CNAME")
		.addPassthroughCopy("src/favicon.*");

	eleventyConfig.addGlobalData("layout", "main.njk");

	// Sass!
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		useLayouts: false,

		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			// Don’t compile file names that start with an underscore
			if (parsed.name.startsWith("_")) {
				return;
			}

			let result = sass.compileString(inputContent, {
				loadPaths: [parsed.dir || ".", this.config.dir.includes],
			});

			// Map dependencies for incremental builds
			this.addDependencies(inputPath, result.loadedUrls);

			return async (data) => {
				return result.css;
			};
		},
	});
	eleventyConfig.addTemplateFormats("scss");

	// Collections
	eleventyConfig.addCollection("blog", (collection) => {
		return collection
			.getFilteredByGlob("src/blog/*.md")
			.sort((a, b) => b.date - a.date);
	});

	eleventyConfig.addCollection("projects", (collection) => {
		return collection
			.getFilteredByGlob("src/projects/*.md")
			.sort((a, b) => (b.data.endDate || b.date) - (a.data.endDate || a.date));
	});

	// Filters
	eleventyConfig.addFilter("limit", (arr, limit) => {
		return arr.slice(0, limit);
	});

	eleventyConfig.addFilter("formatDate", date => {
		return new Date(date).toISOString().slice(0,10);
	})

	// Amend the library
	eleventyConfig.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
	}));
}

export const config = {
	dir: {
		input: "src",
		layouts: "_layouts",
	},
};
