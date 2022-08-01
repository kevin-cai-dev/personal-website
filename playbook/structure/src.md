# Source directory

This directory contains the source code for the website, split up into sections:

[`assets/`](assets.md): This directory contains assets such as `.svg` images converted into
`react` components, which are used throughout the different pages.

[`common/`](common.md): This directory contains all the components, functionality and data
reused across different page contexts.

[`components/`](components.md): This directory contains all the UI components scoped
to a single page's content. For reusable components, they should live in
`common/` instead.

[`page-content/`](page-content.md): This directory contains all the text needed
to be rendered on different pages to avoid hardcoding the content in typescript
files. Markdown is used to also style the text before rendering.

[`pages/`](pages.md): This directory manages the pages available for the website. These
pages themselves should contain minimal logic themselves, with most of the
complexity abstracted away into separate components in `components/`.
