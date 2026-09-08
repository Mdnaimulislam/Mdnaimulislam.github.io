# Personal academic website — Mohammod Naimul Islam Suvon

Source for [mdnaimulislam.github.io](https://mdnaimulislam.github.io): a single-page
academic site built with [Astro](https://astro.build). It ships as static HTML with
no client-side framework, self-hosted fonts and no third-party requests.

---

## Updating the content

**All content lives in `src/data/`. You should never need to edit a component to
change what the site says.**

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, role, affiliation, intro paragraphs, research interests, profile links, Google Scholar metrics |
| `src/data/publications.ts` | Every paper |
| `src/data/research.ts` | The four research themes |
| `src/data/projects.ts` | Project cards |
| `src/data/cv.ts` | Appointments, education, awards, talks, academic service, open-source software |

### Adding a publication

Open `src/data/publications.ts` and add an entry to the `publications` array.
Only `id`, `title`, `authors`, `venue`, `venueShort`, `year`, `type`, `themes` and
`links` are required:

```ts
{
  id: 'my-new-paper',                    // unique; becomes the #pub-my-new-paper anchor
  title: 'Title exactly as published',
  authors: 'A. Author, M. N. I. Suvon and H. Lu',   // your name is bolded automatically
  venue: 'Journal Name, 12(3), 45–67',   // shown under the title
  venueShort: 'MICCAI 2027',             // the small chip
  year: 2027,
  type: 'conference',                    // 'journal' | 'conference' | 'preprint' | 'abstract'
  authorPosition: 'first',               // optional; adds a "First author" badge
  citations: 0,                          // optional
  status: 'Under review',                // optional; for unpublished work
  note: 'Oral presentation',             // optional; a distinction worth showing
  themes: ['cardiovascular'],            // optional; ids from research.ts
  selected: true,                        // optional; shows in the default filtered view
  links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/...' }],
}
```

Sorting is automatic (newest first, then selected work, then by citations). Write
your name as exactly `M. N. I. Suvon` so the emphasis works.

### Refreshing the Google Scholar figures

In `src/data/site.ts`, update `metrics` — change the numbers **and** `asOf`
together so the date on the page stays honest.

### Adding a project card

Add to the `projects` array in `src/data/projects.ts`. The `diagram` field picks
one of the four schematics in `src/components/ProjectDiagram.astro`. To add a new
schematic, add a branch there and a new value to the `diagram` union type.

### Replacing the CV or the photo

- CV: replace `public/Mohammod_Suvon_CV.pdf` (keep the filename, or update `cvPath` in `site.ts`).
- Photo: replace `public/img/portrait.jpg` and `public/img/portrait.webp`, square, at least 360×360.
- Social preview card: run `node qa/make-og.mjs` after a build to regenerate `public/og.png`.

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321, hot reloads on save
```

Other commands:

```bash
npm run build    # static site into dist/, plus dist/standalone.html
npm run preview  # serve the production build
npm run check    # TypeScript and Astro diagnostics
```

Node 20 or newer.

---

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Nothing else to do:

```bash
git add -A
git commit -m "Add MICCAI 2027 paper"
git push
```

The site is live about a minute later. Build status is under the repository's
**Actions** tab.

**First-time setup** (already done for this repository): Settings → Pages →
Source → **GitHub Actions**.

### Moving to a different host

The build output in `dist/` is plain static files, so Vercel, Netlify and
Cloudflare Pages all work with build command `npm run build` and output
directory `dist`. If you deploy to a *project* repository rather than
`<username>.github.io`, set both `site` and `base` in `astro.config.mjs` to match
the subpath.

---

## How it is put together

```
src/
  data/         content — edit these
  components/   one component per section
  layouts/      Base.astro: metadata, fonts, JSON-LD
  pages/        index.astro: the section order
  styles/       global.css (design tokens), fonts.css
public/         portrait, CV, favicon, OG image, self-hosted fonts
qa/             Playwright audit and screenshot scripts
```

Design tokens (colour, type scale, spacing) are CSS custom properties at the top
of `src/styles/global.css`. Light and dark palettes are defined there; the
toggle in the header writes to `localStorage`, and the page follows the system
setting when no choice has been made.

### Quality checks

```bash
npm run build
node qa/audit.mjs      # console errors, horizontal overflow, heading order, broken anchors
node qa/sections.mjs 1440 light   # per-section screenshots into qa/
```

`qa/audit.mjs` runs the page at 1440, 834 and 390 px wide and fails loudly on
console errors or layout overflow. Run it before pushing a design change.
