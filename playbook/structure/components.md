# Components

This directory contains all the UI components scoped
to a single page's content. For reusable components, they should live in
`common/` instead.

`{component-name}/`: Each component should live in its own separate directory,
exported through a `index.tsx` file. Additional files such as `messages.tsx` may
also be present but must not export any data used outside of the component.
