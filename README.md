# Python Mastery — Complete Interactive Edition

Mobile-first PWA course for GitHub Pages.

## Scope
- 15 levels
- 125 lessons
- Fundamentals → professional backend engineering
- pytest
- SQL / SQLAlchemy / migrations
- FastAPI
- async/concurrency
- security/auth
- architecture
- Docker / GitHub Actions
- production engineering
- advanced Python internals
- capstone projects

## Every lesson now contains
1. Learning sequence
2. Objectives
3. Why the topic matters
4. Deep explanation
5. Working code example
6. Common mistakes
7. Fill-in-the-code exercise
8. Bug Hunt
9. Main exercise
10. Hidden complete exercise solution
11. Challenge
12. Hidden complete challenge solution
13. Review quiz with answers
14. Mastery checklist
15. Browser Python Lab integration

## Python Lab
The app uses Pyodide to execute real Python in the browser.
The first Python execution requires an internet connection so the Pyodide runtime can load.

## GitHub Pages
Upload the contents of this folder to the branch/folder published by GitHub Pages.

Important structure:

```text
index.html
app.js
styles.css
curriculum.js
manifest.webmanifest
sw.js
icons/
  icon-180.png
  icon-192.png
  icon-512.png
```

All local asset paths are relative, so project-style GitHub Pages URLs are supported.

## iPhone
Open the GitHub Pages URL in Safari:
Share → Add to Home Screen → Add

Progress and mastery state are stored locally in the browser.


## Mobile-first learning model
- Fill-in-the-code: 10–60 seconds, minimal typing.
- Review/predict-output: tap based.
- Short exercise: 2–5 minutes, one focused concept.
- Challenge: 5–10 minutes, more reasoning but still phone-friendly.
- Full solutions remain hidden until requested.
- Long projects belong in Capstones and are better on a computer.

## Python runtime
Uses stable Pyodide 314.0.5 and performs a 1 + 2 == 3 self-test after loading. Errors are displayed in readable form.
