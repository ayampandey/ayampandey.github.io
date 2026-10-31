# ayampandey.github.io

Personal portfolio of Ayam Pandey — React, Vite, TypeScript, Tailwind CSS v4 and Motion.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve dist/ at http://localhost:4173
```

## Editing content

All copy lives in `src/data/`:

- `site.ts` — name, headline, links (GitHub, LinkedIn, email, CV), approach statement
- `projects.ts` — selected work (add `screenshot` to show a real image)
- `experience.ts` — roles, earlier experience, virtual programmes, certifications, education, skills

Static files in `public/` are served from the site root (e.g. `/Ayam_Pandey_Resume.pdf`).

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. Pages must be set to **Settings → Pages → Source: GitHub Actions**.
