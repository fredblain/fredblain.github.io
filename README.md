# Frédéric Blain — academic website

A static site: two files, no build step.

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | All the text: taglines, bio, news, journey, research, publications, teaching, links | **Yes, this is the only file you normally touch** |
| `index.html` | Layout, styles and the code that builds the page from `content.js` | Only to change the design or add a new kind of section |

## Update the content

1. Open `content.js` (e.g. `vim content.js`).
2. Copy an existing `{ … }` entry in the list you want and change it. Examples:
   - **New paper:** add an entry to `publications` with `year`, `title`, `authors`, `venue`, and optionally `url`, `pdf`, `code`. Sorted by year automatically.
   - **News item:** add `{ date: "2026-11", text: "…" }` to `news`. Sorted newest first. Empty the list to hide the section.
   - **New tagline sentence:** add an entry to `tagline.examples` with the English sentence, one translation per language code, and a `faulty` translation. Wrap each error in `[[double brackets]]` to underline it.
   - **New language in the tagline:** add it to `tagline.languages` and give every example a translation under that code.
   - **Profile link:** fill in the `url` of a `links` entry to show it (empty URLs are hidden). The `icon` is any free Font Awesome 6 class, e.g. `fa-brands fa-github`.
   - **Introduction vs Research:** `intro` is who you are (the About section, with its key facts); `researchIntro` and `research` are what you work on. Keep each to its own job so nothing is said twice.
   - **Photo:** replace `assets/photo.jpg` (square, about 600 px), and ideally `photo.webp` and `photo-1200.jpg` too; or point `photo` in `content.js` at another file. Set `photoStyle` to `"tint"` for the blue-tinted look.
   - **Your name:** `name` is the big heading, `nickname` goes in the browser tab, `alsoKnownAs` is the small line under the name, and `alternateNames` helps search engines match "Fred Blain" and "Frederic Blain".
3. Open `index.html` in a browser to check (works straight from disk, no server needed).

If the page shows "content.js could not be loaded", there's usually a missing comma or quote in `content.js`. Your browser's developer console names the line.

## Publish

**GitHub Pages**

```sh
git init && git add index.html content.js README.md LICENSE robots.txt sitemap.xml assets
git commit -m "Website"
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main
```

Then in the repository: Settings → Pages → Deploy from branch → `main` / root. Later updates are just:

```sh
vim content.js
git commit -am "Add new paper"
git push
```

**University web space or any static host:** copy `index.html`, `content.js` and the `assets/` folder (plus `robots.txt` and `sitemap.xml`) into the same folder.

## Getting found by Google (do once)

The page already includes what Google reads to recognise a researcher profile: a description, link-preview tags, and structured data (schema.org `ProfilePage` + `Person` with your affiliation, past employers, research topics, alternate name spellings, profile links and publications). To make it work fully:

1. **In `content.js`:** set `siteUrl`, your `orcid` iD, and replace every link marked `search: true` with your real profile URL (Google Scholar, DBLP, Semantic Scholar, ResearchGate). Only real profile URLs are given to Google as "the same person". Optionally add a square `photo`.
2. **`robots.txt` and `sitemap.xml`:** already point to https://fredblain.github.io/. Change them if the address changes.
3. **Google Search Console** (search.google.com/search-console): add the site, verify it, and submit `sitemap.xml`. Then use *URL inspection → Request indexing*. Check the structured data with Google's Rich Results Test.
4. **Link back to the site from your other profiles.** This matters most: Google Scholar (Edit profile → Homepage), ORCID (Websites & social links), your Tilburg Pure profile, GitHub, LinkedIn, and your email signature. Links in both directions confirm they're the same person.
5. **Use the same name everywhere** your papers appear, and add DOIs or ACL Anthology URLs to publications in `content.js`.

## Licence and copyright

- `LICENSE` explains it in full: **code MIT**, **text CC BY 4.0**, third-party fonts and icons under their own licences.
- The footer line ("© 2026 Frédéric Blain · Text: CC BY 4.0 · Code: MIT") comes from `legal` in `content.js`. The year range updates itself.
- If you'd rather keep the text to yourself, change the Text licence in `content.js` to `{ what: "Text", name: "All rights reserved" }` and edit point 2 of `LICENSE`.

## Privacy

The site sets no cookies and loads nothing from third parties: fonts (`assets/fonts/`) and icons (`assets/fontawesome/`) are served from the site itself. The only thing stored is the visitor's light/dark choice, in their own browser. Profile links (Scholar, ORCID…) only contact those sites when someone clicks them.

**Upload the `assets/` folder** together with `index.html` and `content.js`, or the fonts and icons will be missing.

## Notes

- The page follows the visitor's light/dark setting.
- Tagline quality scores are illustrative, not model output.
