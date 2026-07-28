# Heist Crew Archive

A standalone static subsite inside the F4 Prestige Archive repository.

## Public path

After merge and deployment:

`/f4-prestige-archive/heist-crew-archive/`

## Architecture

- `index.html` — application shell
- `styles.css` — responsive dossier interface
- `app.js` — hash routing and rendering
- `crew-data.js` and `data/*.js` — condensed verified crew data
- `portraits/*.svg` — canonical portrait assets with embedded compressed images

## Routes

- `#crew`
- `#dossiers`
- `#dossier/<character>/<tab>`
- `#operations`
- `#whiteboard`
- `#archive`
- `#archive/assets`
- `#archive/intel`
- `#archive/timeline`

## Content guardrails

- No operation is treated as canon before play.
- The whiteboard is ephemeral and deliberately does not persist.
- Relationship notes launch empty rather than inventing interpersonal history.
- Each character uses one canonical portrait file everywhere.
- The rules baseline is 2014 fifth edition plus compatible supplements.
