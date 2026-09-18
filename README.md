# Personal Page — DIC-1

A personal page built around a memory-hierarchy theme (GPU VRAM → DRAM → PMEM),
matching the tiered KV-cache thesis work it's describing.

- `index.html` — structure (Profile, Skills, Projects, live clock)
- `style.css` — dark, tier-colored visual design
- `app.js` — live clock (HH:MM:SS), with a 12h/24h toggle and timezone label

## Before you push: edit these

- Swap the placeholder avatar SVG in `index.html` for a real photo (`<img>` tag)
  and update the alt text.
- Replace "AusfA" with your real name if you want one shown publicly.
- Double check the two project descriptions still match what you want to show —
  the thesis one is intentionally light on implementation detail since the
  repo is private.

## Push to GitHub (step by step)

Since git is still new: run these one at a time from inside this folder.

```bash
# 1. Turn this folder into a git repo
git init

# 2. Stage everything and make your first commit
git add .
git commit -m "Initial personal page"

# 3. Create an empty repo on GitHub first (no README/gitignore), named e.g.
#    DIC1_PersonalPage, then connect this folder to it:
git remote add origin https://github.com/YOUR_NAME/DIC1_PersonalPage.git

# 4. Push
git branch -M main
git push -u origin main
```

After that, any time you edit a file:

```bash
git add .
git commit -m "describe what changed"
git push
```

## Turn on GitHub Pages

1. On the repo page: **Settings → Pages**
2. Under "Build and deployment", set **Branch: main**, folder **/ (root)**
3. Save, then wait a minute or two — GitHub gives you a URL like
   `https://YOUR_NAME.github.io/DIC1_PersonalPage/`

## Submit

- Repository URL: `https://github.com/YOUR_NAME/DIC1_PersonalPage`
- Live site URL: `https://YOUR_NAME.github.io/DIC1_PersonalPage/`

Open the live URL yourself before submitting — that's the one the instructor
will actually click.
