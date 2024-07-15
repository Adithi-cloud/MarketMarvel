/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    }
};

export default {
    ...nextConfig,
    ...withVideos(),
};