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

Deployment is fully automated by a GitHub Actions workflow
(`.github/workflows/deploy.yml`). On every push to `main`, it:

1. checks out the repository,
2. installs dependencies from the lockfile (`npm ci`),
3. lints and builds the static site (`npm run build` → `out/`),
4. uploads `out/` as a Pages artifact,
5. deploys it to GitHub Pages.

### One-time repository setup

1. Push this repository to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.

That's it — the next push to `main` will build and deploy automatically. (If you
push to a branch other than `main`, update the `branches` trigger in
`deploy.yml`.)

### Where to check status

- **Actions tab** → the "Deploy to GitHub Pages" workflow shows build/deploy logs.
- The live URL is printed at the end of the `deploy` job, and shown under
  **Settings → Pages**.

The workflow derives the public URL and base path from the repository name, so it
works for both project sites (`USERNAME/repo` → `https://USERNAME.github.io/repo`)
and user/org sites (`USERNAME/USERNAME.github.io`).

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
