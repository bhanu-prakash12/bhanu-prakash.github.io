# G. Bhanu Prakash — Portfolio

A single-page portfolio site. Plain HTML / CSS / JavaScript — no build step, no dependencies, no framework. Just drop it into a GitHub repo and turn on Pages.

## Files

```
portfolio/
├── index.html      # all content (about, skills, experience, education, etc.)
├── styles.css      # all styling — dark theme, type, layout
├── script.js       # tiny scroll-reveal + year stamp
└── README.md       # this file
```

## Deploy to GitHub Pages

Two options. Pick one.

### Option A — User site (recommended): `bhanuprakash.github.io`

This serves at `https://<your-username>.github.io/`. One per GitHub account.

1. Create a new public repo named **exactly** `<your-username>.github.io`
   (e.g. `gbhanuprakash.github.io`).
2. Push these files to the `main` branch root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. GitHub → repo → **Settings → Pages** → Source: `Deploy from a branch`,
   Branch: `main` / `/ (root)`. Save.
4. Wait ~1 minute. Visit `https://<your-username>.github.io/`.

### Option B — Project site: `<user>.github.io/portfolio`

Useful if you want to keep the user-site slot free.

1. Create a public repo named anything you like (e.g. `portfolio`).
2. Push files to `main`.
3. **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `/ (root)`.
4. Site goes live at `https://<your-username>.github.io/portfolio/`.

## Editing content

Everything lives in `index.html`. Sections are clearly labeled with comments (`<!-- HERO -->`, `<!-- EXPERIENCE -->`, etc.). To update:

- **Roles** → `<section id="experience">`, add a new `<li class="tl-item">` block at the top.
- **Skills** → `<section id="skills">`, edit the `<ul class="chips">` lists.
- **Stats** → `<ul class="hero-stats">` in the hero.
- **Contact** → search for `bhanuprakash.gopularam@gmail.com` and `linkedin.com/in/gbhanuprakash`. The GitHub row has `<your-username>` as placeholder — replace it.

To change colors, fonts, or spacing: open `styles.css`, all design tokens are in `:root { }` at the top.

## Customization quick reference

| What | Where |
|---|---|
| Accent color (amber) | `--accent` in `styles.css` |
| Background tones | `--bg`, `--bg-card` in `styles.css` |
| Display font | `--font-display` (currently Fraunces) |
| Body font | `--font-body` (currently Inter) |
| Max content width | `--max` (currently 1100px) |

## Optional next steps

- Add a `resume.pdf` to the repo and link it from the hero (`<a class="btn btn-ghost" href="resume.pdf" download>Download CV</a>`).
- Add a `favicon.ico` and `og-image.png` at the root, then reference them in `<head>`.
- Set a custom domain in **Settings → Pages → Custom domain**.

## Browser support

Modern evergreen browsers. The design uses CSS variables, backdrop-filter, and IntersectionObserver — all supported in Chrome/Edge/Firefox/Safari from 2021 onward.
