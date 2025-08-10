import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: {
    // ATENÇÃO: Isso permite que você crie builds de produção mesmo que

    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
  // api: {
  //   bodyParser: {
  //     sizeLimit: "4.5mb", // Defina um limite razoável. Ex: 8MB
  //   },
  // },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
