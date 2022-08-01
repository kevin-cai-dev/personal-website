# Page Content

This directory contains all the text needed
to be rendered on different pages to avoid hardcoding the content in typescript
files. Markdown is used to also style the text before rendering.

`about.md`: Content used for the "About Me" section on the homepage.

`projects/`: Each project's description and metadata are stored in its own
markdown file, dynamically read and rendered for the Portfolio page. This allows
more projects to be added by simply creating a new markdown file. Each file in
this directory must follow the same metadata/frontmatter structure:

```
position -> order in which to render the projects. Starts at 1
title -> display title
github (optional) -> repository link
link (optional) -> link to a live example of the project
imageurl: -> relative url to matching image in `public/` for display
technologies -> array of strings dictating technologies used in the project
```
