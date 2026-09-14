/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — the site is served by GitHub Pages, which has no
  // Node server, so every route is pre-rendered into ./out at build time.
  output: 'export',

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  images: {
    // GitHub Pages cannot run the Next.js image optimizer.
    unoptimized: true,
  },

  // Emit /about/index.html instead of /about.html so paths resolve on Pages.
  trailingSlash: true,

  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // PoweredByHeader removes the X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig
