# Pratiksha Singh Portfolio

A responsive React, TypeScript, Vite, and Tailwind CSS portfolio.

## Set up a new project

The following commands create a fresh Vite + React + TypeScript project and
install the packages used by this portfolio:

```sh
npm create vite@latest pratiksha-portfolio -- --template react-ts
cd pratiksha-portfolio
npm install
npm install lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

In the generated project, use the `vite.config.ts` and `src/index.css` from this
repository to enable Tailwind CSS, then copy the `src` components and `App.tsx`.

## Run this portfolio

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with
`npm run preview`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it
to GitHub Pages whenever changes are pushed to `main`. In the repository's
**Settings > Pages**, set the source to **GitHub Actions**. The Vite base path is configured for this GitHub user site:

`https://thepratikshasingh.github.io/`

The first deployment may take a few minutes. Check the Actions tab for the
workflow status and deployment URL.

## Profile content

Education and contact information are based on the resume supplied for this
portfolio. The supplied profile does not list professional roles, projects, or
technical skills, so those sections identify the missing information rather
than inventing it. Replace the empty projects list in `src/App.tsx` and add
confirmed details when available.

The resume download is served from `public/Pratiksha-Singh-Resume.pdf`.
