# AGENTS.md — Working agreement for developers and AI agents

Read **SOUL.md** first. It defines the brand, design philosophy, and non-negotiable
quality bars. This file defines the technical working agreement.

---

## 1. Project root & boundary

```text
D:\SUAMI\project\vivame-design
```

This directory is a child of `D:\SUAMI\project`, which contains **multiple unrelated
projects**. Strictly forbidden: creating, modifying, renaming, moving, deleting, or
overwriting anything outside this project root — including reads that turn into
writes. Never run recursive/destructive commands against `D:\SUAMI\project`.

If the active workspace ever appears to be `D:\SUAMI\project` (the parent), stop and
ask. Never compensate by guessing paths.

## 2. Current tech stack (verified Sep 2026)

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16.3.4** (App Router) | `src/` directory layout |
| UI library | React 19.2.8 | Server components by default |
| Language | TypeScript (strict) | Path alias `@/*` → `./src/*` |
| Styling | Tailwind CSS v4 | CSS-first config in `src/app/globals.css` (`@theme inline`); **no** `tailwind.config.*` file |
| Fonts | `next/font/google` (Geist) | Loaded in `src/app/layout.tsx`; swap for brand typography in Phase 1 |
| Package manager | **npm 11** | Lockfile: `package-lock.json`. NOTE: pnpm 11 was abandoned here — its HTTP fetch repeatedly aborted large tarballs on this machine's slow link; npm's fetch stack is reliable. `.npmrc` carries generous fetch timeouts for this reason. |
| Lint | ESLint 9 flat config | `eslint.config.mjs` + `eslint-config-next` |
| Dev server | Next (Turbopack) | `next dev` |

## 3. Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server (Turbopack)
npm run lint       # run ESLint
npm run build      # production build
npm run start      # serve production build
```

Always verify with a real `npm run build` (and `npm run lint`) before declaring work done.

## 4. Project structure

```text
vivame-design/
├── SOUL.md               # brand identity + quality standards (read first)
├── AGENTS.md             # this file
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── src/
    ├── lib/
    │   └── site.ts          # central site config — brand, nav, CONTACT PLACEHOLDERS
    ├── components/
    │   ├── layout/          # Header (client: mobile menu), Footer (server)
    │   └── site/            # PageIntro, PlaceholderNote
    └── app/
        ├── layout.tsx       # root: fonts (Geist + Cormorant Garamond), metadata
        ├── globals.css      # Tailwind import + design tokens (@theme) + base styles
        ├── icon.svg         # brand favicon
        └── (site)/          # marketing route group — shell layout w/ header+footer
            ├── layout.tsx
            ├── page.tsx     # home (/)
            ├── portfolio/   # selected work (gallery pending)
            ├── services/
            ├── about/
            └── contact/
```

Design tokens live in `src/app/globals.css` (`@theme`): surfaces `paper/surface/cream`,
text `ink/stone/faint`, hairline `line`, bronze accent `brass/brass-deep`. Typography:
serif display (Cormorant Garamond, `font-display`) over Geist sans (`font-sans`).
Utilities: `.container-site`, `.eyebrow`, `.btn` (`.btn-dark`, `.btn-outline`),
`.skip-link`. Placeholder content (contact details, imagery) is centralized in
`src/lib/site.ts` and marked via the `PlaceholderNote` component — never present
fabricated details as real.

## 5. Conventions

- **Routes**: App Router colocation — route files (`page.tsx`, `layout.tsx`) live next
  to their segment. Server Components by default; add `"use client"` only when needed.
- **Imports**: use the `@/*` alias; never deep-relative imports that escape `src/`.
- **Styling**: Tailwind utilities in JSX; shared design tokens as CSS variables in
  `globals.css` `@theme`. No inline `style` except dynamic values. No UI kit — VIVAME
  Design gets bespoke, refined components.
- **Imagery**: use `next/image` everywhere (responsive, lazy, modern formats). Never
  plain `<img>` for project/portfolio imagery. Portfolio images are primary content.
- **Metadata**: every route exports `Metadata` (title, description, OpenGraph).
- **Accessibility**: semantic HTML, labels on all inputs, visible focus states,
  keyboard operability, `prefers-reduced-motion` respected.
- **Copy**: see SOUL.md — no fabricated clients/testimonials/awards. Placeholders must
  be visibly marked and trivially swappable (single data source per project).
- **Types**: strict mode; model content (projects, services) as shared TS types.
- **Security**: contact/form data validated server-side; never trust the client;
  rate-limit public endpoints; no secrets in client code or committed env files
  (`.env*` is git-ignored).

## 6. Quality gates before "done"

1. `pnpm lint` passes with no errors.
2. `pnpm build` completes successfully.
3. Behavior verified in a running browser at mobile and desktop widths.
4. No fabricated content; placeholders clearly marked.
5. Nothing outside `D:\SUAMI\project\vivame-design` was touched.

## 7. Rules of conduct

- Understand before changing; preserve working functionality; no rewrites for style.
- Fix root causes — no hiding errors, no suppressing validation, no disabling checks.
- Reuse before duplicating; keep dependencies small and intentional.
- Prefer simple, readable code over clever abstractions.
- Ask when a decision could cause data loss, security issues, or major rework.

*Update this file whenever the stack, commands, or structure meaningfully change.*

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
