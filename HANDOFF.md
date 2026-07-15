# F4 Prestige Archive — Handoff

## Objective

Maintain and publish the public review site for the F4 campaign's senior-year prestige classes.

## Truth surfaces

- `src/PrestigeArchive.tsx`: interface, navigation, class roster, and reader rendering.
- `src/styles.css`: visual system and responsive behavior.
- `public/prestige-classes.md`: player-facing mechanics and flavor text.
- `public/portraits/`: character portraits.
- `.github/workflows/deploy.yml`: GitHub Pages deployment.

## Private material

DM-only playtest notes are not part of the public repository. The current private copy is maintained at:

`G:\My Drive\Strixhaven\Prestige Classes\Internal Review\DM_Playtest_Watchpoints.md`

## Release workflow

1. Edit source or player-facing content.
2. Run `npm run build`.
3. Review the local preview with `npm run preview`.
4. Commit and push to `main`.
5. Confirm the `Deploy to GitHub Pages` workflow completes and verify the public URL anonymously.

## Current validation

- TypeScript validation and production build are required in the deployment workflow.
- The Vite base path is `/f4-prestige-archive/`; asset references must remain base-aware.
- The public markdown ends at `End of Player Material` and excludes implementation/watchpoint notes.
