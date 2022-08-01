## Structure

The website follows a basic file structure based off the basic `Next.js` project
structure.

```
├── src
│   ├── assets
│   │   ├── {asset-component}.tsx
│   │   └── icons.tsx
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
│   │   └── api/
│   │   │   └── {apiRoutes}.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── keyboards.tsx
│   │   └── portfolio.tsx
│   ├── page-content
│   │   ├── projects/
│   │   │   └── {project-info}.md
│   │   └── about.md
│   ├── styles
│   │   └── globals.css
└── public
    └── {static-content}
```

[`public/`](public.md): This directory contains static content to be served.

[`src/`](src.md): This directory contains all the source code for the website.
