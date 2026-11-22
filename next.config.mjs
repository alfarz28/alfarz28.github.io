/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(import.meta.url);

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
