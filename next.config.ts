import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  // Static HTML export to ./out, served by Cloudflare Workers static assets.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
}

export default nextConfig
