# Pages

This directory manages the pages available for the website. These
pages themselves should contain minimal logic themselves, with most of the
complexity abstracted away into separate components in `components/`.

`_app.tsx`: The root of the app as defined by `Next.js` standards.

`_document.tsx`: A custom `Document` used to update the `<html>` and `<body>`
tags used to render a page.

`index.tsx`: The default route for the website, and should show the home page.

`{route-path}/(index | [slug]).tsx`: Additional pages/routes in the website should live
inside a nested directory structure representing the route.
