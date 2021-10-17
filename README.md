# 12beesinatrenchcoat.github.io
Another attempt at making a website, this time with [Jekyll](https://jekyllrb.com). It... works, I guess.

## about the branches
This repository currently uses three branches.
### master
The master branch is the one that contains the source code, excluding content.
### content
The `content` branch is the branch on which the site is built from. Visit it if you want to see what my files look like!
### gh-pages 
This branch contains the built version of the site.

## usage
### 0. Ask yourself if you really want to.
- If you've decided not to, you've made a good choice.
- If you *really* want to… 

### 1. Get to know the files.
- You *really* should edit the [`_config.yml`](./_config.yml) file. 
- Also the [`index.md`](./index.md) - it's what people first see.
- You should add a `favicon.ico` and `favicon.svg` if you like icons..
### 2. Add some content!
- Blog posts go in [`blog/_posts`](./blog/_posts).
- Projects go in [`_projects`](./_projects).

To create a post/project, add a markdown file in one of those folders, with a name of: `YYYY-MM-DD-[whatever_the_name_of_the_thing_is]`, where `YYYY-MM-DD` is the date/start date of the thing, and `[whatever_the_name_of_the_thing_is]` is whatever the name of the thing is.

Additionally, you should add some front matter! Put three hyphens (`---`) (and only three hyphens (`---`)) at the top of the file and the line after it. Then, between them, add some YAML:
```yaml
title: "the title of the post, project, or what not"
description: "give a short description of the post/project."
image: "a url to the banner image of the post/project!"

# the properties after this are usually used for projects.
type: code
tags: # should be a list.
  - js
endDate: 2020-02-23 # when the project ended. do not include if the project is ongoing.
status: "complete" # status can be: "complete", "wip", "on_hold", or "scrapped"
```
And then type some content.
#### 2a. Some special classes
- `smoltext` makes text smol.
- `emphasis-highlight` highlights text in the emphasis color of the page. 

### 3. Cool, how do I build the site?
If you're on GitHub, you can probably set up [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml). Make sure the content branch and publish branch are right (they shouldn't be the same!) and tell GitHub Pages whatever branch the built site is on. 

If you're not using GitHub pages, figure it out yourself.

Anyways, that's about it. If you want an example, feel free to look at the [`content` branch](https://github.com/12beesinatrenchcoat/12beesinatrenchcoat.github.io/tree/content), which contains *all* the files behind my site (which you can visit [here](https://12beesinatrenchcoat.github.io)).

## contributing

If there's something that seems very wrong, you're free to open an issue, but please ask before you start working on things!

No pull requests to the `content` or `gh-pages` branches, though, please. 

## special thanks
Too many people.
- Open Sans is still my favorite font. Thanks Steve Matteson!
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) is also a brilliant code font.
- Everyone involved in [Jekyll](https://jekyllrb.com); it's a joy to use.
	- [@ntkme](https://github.com/ntkme) for their work on [adding `sass-embedded` to the `jekyll-sass-converter`](https://github.com/jekyll/jekyll-sass-converter/pull/124). <3!
- Everyone involved in [Sass](https://sass-lang.com/). It's hard to go back to writing normal CSS after experiencing it…
- Everyone at Stack Overflow.
- Every contributor to the [MDN Web Docs](https://developer.mozilla.org/en-US/).

…yeah, alright, I'm done.

## licensing
Fonts used on this website and in this repo are under the [SIL Open Font License 1.1](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL). See more info in the [`fonts` folder](assets/fonts/).  
The code(?) in this repository is under the [MIT License](LICENSE).  
All content on the website is under the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/) (unless otherwise stated).