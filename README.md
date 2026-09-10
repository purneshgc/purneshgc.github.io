# Cybersecurity Portfolio

A static Astro + Tailwind portfolio site: Home, Projects, Skills (with per-skill
detail pages), and a Timeline / learning log. All content lives as Markdown
files under `src/content/` — adding a new project, skill, or log entry never
requires touching code.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

To build the static production output (goes to `dist/`):

```bash
npm run build
npm run preview   # preview the production build locally
```

## Adding content

### New project → `src/content/projects/your-project.md`

```md
---
title: "Project Name"
description: "One or two sentence summary of what the project does."
githubUrl: "https://github.com/YOUR_USERNAME/your-repo"
skills: ["Python", "Network Security"]   # should match skill "name" fields
status: "completed"                       # "completed" | "in-progress"
date: 2026-01-15
image: ""                                 # optional
---
Optional longer body text.
```

### New skill → `src/content/skills/your-skill.md`

The filename (minus `.md`) doesn't have to match `slug`, but keeping them the
same avoids confusion. `slug` is what determines the URL (`/skills/<slug>`).

```md
---
name: "Your Skill Name"
slug: "your-skill-name"
shortDescription: "One-line summary for the skills grid card."
tryhackmeBadges:
  - name: "Badge Name"
    imageUrl: "https://tryhackme-badges.s3.amazonaws.com/your-id.png"
    link: "https://tryhackme.com/room/yourroom"
relatedProjects: ["your-project"]   # filenames (no .md) from src/content/projects/
---
Full description goes here — this renders on the skill's detail page.
```

### New timeline entry → `src/content/timeline/2026-09-15-my-entry.md`

Naming the file with the date first (`YYYY-MM-DD-slug.md`) keeps the folder
sorted for humans, but the page always sorts by the `date` field itself.

```md
---
date: 2026-09-15
title: "Short title of what you did"
summary: "One or two sentence recap."
link: "https://tryhackme.com/room/example"   # optional
tags: ["tryhackme", "web"]                     # optional
---
```

### Editing the About text

Edit `src/content/about/about.md` directly — the body of that file is what
renders in the "About" section on the homepage.

All frontmatter fields are validated by `src/content/config.ts` (Zod schemas
with inline comments) — if a field is missing or the wrong type, `npm run dev`
or `npm run build` will fail with a clear error pointing at the file.

## Deployment (GitHub Pages)

This repo is already wired for automatic deployment via GitHub Actions
(`.github/workflows/deploy.yml`, using `withastro/action`). Every push to
`main` builds the site and publishes it to GitHub Pages.

**One-time setup:**

1. In `astro.config.mjs`, set:
   - `site` to `https://<your-username>.github.io`
   - `base` to `/<your-repo-name>` (or `/` if this repo *is* your
     `<username>.github.io` user site)
2. Push this repo to GitHub.
3. In the repo settings: **Settings → Pages → Source**, select **GitHub
   Actions**.
4. Push to `main` (or re-run the workflow from the **Actions** tab) — the
   site will be live at the `site` + `base` URL within a minute or two.

**Daily workflow after that:** just add/edit a Markdown file, commit, and
`git push`. The Action rebuilds and redeploys automatically — no manual
build step needed.

```bash
git add .
git commit -m "Add TryHackMe room to timeline"
git push
```
