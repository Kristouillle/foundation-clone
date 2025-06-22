/** @type {import('next').NextConfig} */
const { paraglide } = require("@inlang/paraglide-next/plugin")

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    experimental: {
        serverActions: true,
    }
};

module.exports = paraglide({
    paraglide: {
        project: "./project.inlang",
        outdir: "./paraglide"
    },
    ...nextConfig
});

