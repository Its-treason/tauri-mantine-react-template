# Tauri + React + Mantine Template

A project template for building desktop apps with Tauri, React, and Mantine.

## Stack

- **[Tauri](https://tauri.app/)** — desktop app shell (Rust backend)
- **[React](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — UI
- **[Mantine](https://mantine.dev/)** — component library
- **[TanStack Query](https://tanstack.com/query)** — async state / data fetching
- **[Zustand](https://zustand.docs.pmnd.rs/)** — client state management
- **[Rspack](https://rspack.dev/)** — fast Rust-based bundler
- **[Oxlint](https://oxc.rs/docs/guide/usage/linter)** — fast Rust-based linter

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) with the following extensions (see `.vscode/extensions.json`):

- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- [OXC](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)

## Getting Started

```bash
bun install
bun run tauri dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the Rspack dev server |
| `bun run build` | Type-check and build for production |
| `bun run lint` | Lint `src/` with Oxlint |
| `bun run tauri dev` | Start the full Tauri dev environment |
| `bun run tauri build` | Build the distributable app |
