# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem "jekyll"

group :jekyll_plugins do
	gem 'jekyll-sitemap'
	gem 'jekyll-feed'
	gem 'jekyll-sass-converter', github: 'jekyll/jekyll-sass-converter'
	gem 'sass-embedded'
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

