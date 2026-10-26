# Krita Cookbook

<!-- ZQM-START -->
<!-- markdownlint-disable MD033 -->
<p align="center">
  <strong>ZQM Labs</strong><br>
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-END -->

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A **Krita cookbook** for game art: sprites, textures, animation frames, and export pipelines. Patterns are written for game artists working in Krita, where layers, palettes, and export presets keep a game's art set consistent. It is intended for game developers and artists producing 2D game art. Validate each pattern against your own game, Krita version, and operating environment before adopting it.

## Repository role and status

**Status:** Active, public — first sprite source and export manifest implemented. The automated contract checks do not launch Krita or certify visual quality.

**What this repository is:** Krita patterns — sprites, textures, animation frames, and export pipelines for game art.

**What it contributes:** Part of the ZQM Labs game-development portfolio, and a sibling to the ZQM Computing geospatial cookbook series.

**Standing:** This repository is maintained independently. Automated checks cover only the paths and environments configured in its workflows; they do not establish production readiness or operational certification.

## Who this is for

Game developers and artists producing 2D game art in Krita, especially sprites and textures.

## Prerequisites

- Krita 5.3.4.1 (fleet-verified on Node-1; version pinned per pattern at fill time)
- Synthetic reference art for the examples
- A game client that can load the exported PNG/WebP art

## Patterns

| # | Example | Status | What it demonstrates |
|---|---------|--------|----------------------|
| 01 | `01-first-sprite` | Implemented source/manifest | Transparent lantern SVG source, shared palette, intended PNG/WebP export sizes, and automated contract checks |
| 02 | `02-texture-workflows` | Planned | Seamless textures and tileable surfaces for game worlds |
| 03 | `03-animation-frames` | Planned | Frame-by-frame sprite animation with onion skin and export |
| 04 | `04-palette-pipeline` | Planned | Palettes, brushes, and export presets shared across a game's art set |

## Quick start

Requires Node.js 20+ for the source contract tests:

```sh
cd examples/01-first-sprite
npm test
```

Open `examples/01-first-sprite/lantern.svg` in Krita to rasterize and edit the source. See that pattern's README for the intended export contract and limitations.

## Repository layout

```text
krita-cookbook/
├── .github/workflows/examples.yml
├── examples/01-first-sprite/
│   ├── lantern.svg
│   ├── palette.json
│   ├── sprite-contract.test.mjs
│   ├── package.json
│   └── README.md
├── README.md
└── LICENSE
```

## Roadmap

- First pattern pass: first sprite (01), then texture workflows (02)
- Second pass: animation frames (03) and palette pipeline (04)

## Contributing

A contributing guide lands with the first pattern pass. Report security issues to <zqmcomputing@gmail.com> — please do not open a public issue for those.
