import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * - `output: "export"` makes `next build` emit a fully static `out/` folder.
 * - `images.unoptimized` disables the server-side image optimizer (the
 *   `/_next/image` endpoint does not exist on static hosting). Source images
 *   are already web-optimized.
 * - `basePath` / `assetPrefix` are driven by NEXT_PUBLIC_BASE_PATH so the site
 *   works both at a domain root (custom domain, empty) and under a GitHub
 *   Pages repository path (e.g. `/repo-name`).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
