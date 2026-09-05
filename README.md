# VIVAME Design

Digital platform for **VIVAME Design** — an interior design, architecture, and 3D
interior visualization studio.

Premium, portfolio-first website built to feel like an architecture/interior-design
editorial publication: generous whitespace, strong typography, large imagery, and a
clear path from *Discover → Explore → Trust → Contact*.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first configuration)
- **Motion** (Framer Motion v13) — scroll reveals, page transitions, parallax, carousels
- **npm** (lockfile: `package-lock.json`)

## Getting started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

### Production build

```bash
npm run build
```

The site is built with **static export** (`output: "export"` in `next.config.ts`), so
`npm run build` produces a fully static site in:

```text
out/
```

There is no server, no database, and no API. Everything is pre-rendered HTML/CSS/JS
plus a handful of client components for interactive behavior (portfolio filter,
gallery lightbox, scroll reveal, share dialog, and the contact form's WhatsApp
handoff).

## Environment variables

Copy `.env.example` to `.env.local` for local development, or set these in your
GitHub repository for CI builds. None are secrets.

| Variable | Purpose | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public origin (no trailing slash, no base path) | `https://vivamedesign.com` |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path when hosted under a repository | `/my-repo` (empty at a domain root) |

If `NEXT_PUBLIC_SITE_URL` is unset, it falls back to `http://localhost:3000` (local
dev only). The GitHub Actions workflow sets both variables automatically.

## GitHub Pages

The site is deployed as a **static export** to
`https://darykusuma741.github.io/vivame-design` (base path `/vivame-design`).

Deployment uses GitHub Pages' **"Deploy from a branch"** mode against the
`gh-pages` branch. Build, then push the `out/` directory plus an empty
`.nojekyll` marker to `gh-pages`:

```bash
npm run build            # produces out/
TMP="$(mktemp -d)" && cp -r out/. "$TMP/" && touch "$TMP/.nojekyll"
cd "$TMP" && git init -q && git add -A && git commit -q -m "deploy"
git push -f git@github.com:darykusuma741/vivame-design.git HEAD:gh-pages
```

Then in **Settings → Pages**, set **Source → Deploy from a branch** → branch
`gh-pages` → folder `/ (root)`.

Build-time environment variables (inlined by Next.js):

```bash
NEXT_PUBLIC_BASE_PATH=/vivame-design \
NEXT_PUBLIC_SITE_URL=https://darykusuma741.github.io \
npm run build
```

> **Note:** a GitHub Actions workflow (`.github/workflows/deploy.yml`) is also
> provided for automated deploys, but at the time of writing it cannot run —
> GitHub does not assign an Actions runner to this account (an account-level
> entitlement issue, not a project defect). The legacy `gh-pages` branch flow
> above is the working path.

### Custom domain

To serve from a custom domain later:

1. In **Settings → Pages**, set your custom domain (and add the DNS records GitHub
   shows you).
2. Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` and `NEXT_PUBLIC_BASE_PATH=`
   in the workflow, then re-deploy.

No `CNAME` file is committed until a real domain is provided.

## Project docs

- `SOUL.md` — brand identity, design philosophy, and non-negotiable quality bars.
- `AGENTS.md` — technical working agreement: stack, structure, conventions, quality
  gates. Read both before contributing.
