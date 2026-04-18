# Bureau Digital Environment Free Site

This folder is a static public website for `Bureau Digital Environment`.

It is meant for free hosting on:

- GitHub Pages
- Cloudflare Pages

It does **not** require the live Python account backend.

## What this version is for

Use this when you want:

- a public-facing game website
- a download button for beta builds
- a roadmap / feature page
- a zero-cost launch site

Use the old account portal only when you are ready to pay for a persistent backend again.

## GitHub Pages setup

1. Upload the contents of this folder into the **root** of your public GitHub repo
2. Make sure `index.html`, `styles.css`, and `app.js` are in the repo root
3. Open your GitHub repo settings
4. Go to `Pages`
5. Set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Save and wait for GitHub Pages to publish

## Download button

The main download button currently points to:

`https://github.com/cufiol/Bureau-Digital-Environment-/releases`

If you want a different link, edit `app.js` and change `downloadUrl`.

## Files

- `index.html`: page structure
- `styles.css`: visual styling
- `app.js`: simple launch config and clipboard checklist

## Optional next step

If you want, this static site can stay public for free while the real account backend is rebuilt later on a paid host.
