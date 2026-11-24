# ITIS3135 React course pages

React and Vite recreation of Neelesh Reddi's Home, Contract, Introduction, and About pages. Shared React header/footer components and the original stylesheet preserve the course design. Links to uncopied projects point to the Charlotte site.

Run `pnpm install`, then `pnpm dev`. Run `pnpm build` and `pnpm preview` to check production output. Vercel uses the Vite preset and `dist` output folder. Four HTML entries support direct links, refresh, back/forward navigation, and a fresh validator run on every page load. The document title follows the selected React page.

Built with OpenAI Codex assistance for M16. Existing course content and assets belong to this student's course site.

## Published site

https://itis3135-react-rosy.vercel.app/

## Validator compatibility

Accumulus validates HTML, CSS and images, but its classroom JavaScript rules flag Vite-generated minified code, including React internals. These are build-output lint findings, not browser runtime failures. The validator remains enabled. Generated bundles use the .min.js suffix; editable source is in src/. Course standards and automated accessibility checks are also run against the rendered pages. The local preview can flag the old HTML-include check; this assignment uses shared JSX components in src/components. The public Vercel course checks are tested separately.

## Deployment

Deployed with the authenticated Vercel CLI using `pnpm dlx vercel --prod`. The GitHub repository is separate and up to date. Automatic Git deployment is not connected because the Vercel account needs its GitHub login connection configured first. Future changes can be deployed through the CLI.
