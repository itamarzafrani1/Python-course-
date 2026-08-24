# Python Mastery — Zero to Production

A mobile-first PWA course designed for GitHub Pages.

## Course scope
- 15 levels
- 125 lessons
- Python target: 3.14
- Core Python, OOP, typing, files, logging, pytest, SQL, SQLAlchemy, FastAPI, async, security, Docker, CI/CD, architecture, performance and capstones.

## Publish to GitHub Pages
1. Copy all files in this folder to the root of your GitHub Pages repository (or to `/docs` if your Pages source is configured to `/docs`).
2. Commit and push.
3. In GitHub: Settings → Pages → choose the branch/folder that contains `index.html`.
4. Open the HTTPS Pages URL once and refresh after deployment.
5. On iPhone Safari: Share → Add to Home Screen → Add.

## Important GitHub Pages/PWA detail
All URLs use relative paths (`./...`) so the app works when GitHub Pages serves it below `https://username.github.io/repository-name/`.

## Local preview
A service worker normally needs HTTP/HTTPS rather than `file://`.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Progress
Completed lessons are stored locally in the browser with localStorage. No account or backend is required.

## Editing the course
The curriculum is in `curriculum.js`. Each lesson has:
- title
- concepts
- theory
- code example
- exercise
- self-check
- quiz

## Suggested learning rule
Do not mark a lesson complete until you can:
1. explain it without notes,
2. write a fresh example,
3. handle at least one edge case,
4. test it.
