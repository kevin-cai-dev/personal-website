## Structure

The website follows a basic file structure based off the basic `Next.js` project
structure.

```
├── src
│   ├── assets
│   │   ├── {asset-component}.tsx
│   ├── common
│   │   ├── ui
│   │   │   ├── {common-component}/
│   │   │   │   ├── index.tsx
│   │   │   │   └── *.tsx
│   │   │   └── index.tsx
│   │   ├── constants.tsx
│   │   └── utils.tsx
│   ├── components
│   │   └── {component}/
│   │       ├── index.tsx
│   │       └── *.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── {other-pages}.tsx
│   ├── styles
│   │   └── globals.css
└── public
    └── {static-content}
```

`public/`: This directory contains static content to be served, not bound to a
page's content.

[`src/`](src.md): This directory contains all the source code for the website.
