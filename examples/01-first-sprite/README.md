# 01 — First game sprite

A transparent lantern sprite source and reusable palette/export manifest for a small 2D game asset.

## Edit in Krita

Open `lantern.svg` in Krita and import/rasterize it as a 128×128 transparent image. Keep the original SVG as the editable source; do not flatten the only copy. The source uses the explicit colors listed in `palette.json`. Add or revise layers in Krita as needed, then export transparent PNG variants for crisp pixel-independent UI/game use or WebP where the target engine and delivery pipeline support it.

This pattern is a vector starter, not a native layered `.kra` project. Krita's exact import/rasterization dialog may vary by version.

## Export contract

`palette.json` records the transparent canvas and intended output sizes:

- PNG: 32, 64, and 128 pixels, with alpha.
- WebP: 64 and 128 pixels, with alpha.

Treat these as requested variants, not evidence that exported raster files already exist. Exported files should be reviewed at actual display size for silhouette, edge quality, and alpha halos.

## Validate the source contract

Requires Node.js 20 or newer:

```sh
npm test
```

The tests verify canvas metadata, transparent-source expectations, palette consistency, and export-manifest structure. They do not launch Krita, render the SVG, or verify actual PNG/WebP exports.

## Files

- `lantern.svg` — editable vector source.
- `palette.json` — color tokens and intended export variants.
- `sprite-contract.test.mjs` — dependency-free source/manifest checks.
- `package.json` — test command.

## Asset hygiene

- Keep a source file and export artifacts distinct.
- Verify alpha edges against both light and dark backgrounds.
- Record provenance and licenses for all imported art; this starter uses authored vector geometry.
- Never assume a passing manifest test means the sprite is visually approved.
