# aswny.github.io

Personal site / CV for **Ashwani Yadav** — [aswny.github.io](https://aswny.github.io).

Built on [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv), a minimalist,
print-friendly CV template (Next.js + Tailwind CSS + shadcn/ui), statically
exported and hosted on GitHub Pages.

## develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## scripts

```bash
pnpm dev          # start the dev server
pnpm build        # static export into ./out
pnpm check        # biome lint + format check
pnpm check:fix    # biome lint + format with auto-fix
```

## editing content

All of the CV content lives in a single file: [`src/data/resume-data.ts`](src/data/resume-data.ts).
Name, tagline, summary, contact links, work history, education, skills and
projects are all fields on `RESUME_DATA` — no component changes needed.

Other things worth knowing:

- `public/profile.jpeg` — avatar, also inlined into the OpenGraph image.
- `public/resume-ashwani-yadav.pdf` — résumé PDF, linked from the ⌘K menu.
- `src/app/icon.tsx` / `src/app/apple-icon.tsx` — favicons, generated from initials.
- `src/app/layout.tsx` — site metadata and the Google Search Console verification token.

The page is print-friendly: <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> renders
a clean one-page PDF. <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> opens a
command menu with links and a print shortcut.

## deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push
to `master`: it installs dependencies, runs the Biome checks, builds the static
export into `out/`, and publishes that directory to the `gh-pages` branch, which
GitHub Pages serves.

Because the export is fully static, `next.config.js` sets `output: 'export'` and
`images.unoptimized` — there is no Node server in production.

## license

[MIT](LICENSE). Template © [Bartosz Jarocki](https://github.com/BartoszJarocki/cv), MIT.
