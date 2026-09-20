const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/preparasion-sita" : "",
  assetPrefix: isProd ? "/preparasion-sita/" : "",
};

export default nextConfig;
