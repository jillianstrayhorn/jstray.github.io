# Personal Website

Static website for Dr. Jillian Strayhorn — no build step, no dependencies. Plain HTML,
CSS, and a few lines of JavaScript. Hosted with GitHub Pages.

## Structure

```
.
├── index.html        # About us (home page)
├── people.html       # People
├── applets.html      # Applets / tools listing
├── css/style.css     # All styling (edit the variables at the top to re-theme)
├── js/main.js        # Mobile nav toggle
├── assets/logo.png   # Lab logo (also used as favicon / placeholder photo)
└── .nojekyll          # Tell GitHub Pages to serve files as-is
```

## Run locally

The site is plain HTML, so you just need a local web server. From the repo root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Press `Ctrl+C` to stop. Edit a file, save,
and refresh the browser to see changes.

> You can also open `index.html` directly in a browser, but using a local
> server matches how GitHub Pages serves the site.

## Edit the content

All content lives directly in the HTML files — look for `<!-- TODO -->`
comments:

- **About us** → `index.html` (mission, research themes, contact).
- **People** → `people.html`. Duplicate a `<article class="card person">`
  block per person. Put photos in `assets/people/` and point `<img src="...">`
  at them (square images look best).
- **Applets** → `applets.html`. Duplicate a `<article class="card applet">`
  block per tool. Set each `Launch` link's `href` to the app URL (e.g. a
  hosted Shiny app, or a subfolder in this repo).

To change colors/fonts, edit the `:root` variables at the top of `css/style.css`.

## Deploy to GitHub Pages

This repo is named `CADIO-Lab.github.io`, so GitHub Pages serves it from the
repository root at **https://cadio-lab.github.io/**.

1. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Build lab website"
   git push origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**, set **Source** to
   *Deploy from a branch*, branch **main**, folder **/ (root)**, then save.
3. Wait ~1 minute; the site appears at https://cadio-lab.github.io/.

Every push to `main` redeploys automatically.
