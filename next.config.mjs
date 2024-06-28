/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    redirects: () => {
        return [{
        source: '/',
        destination: '/1',
        permanent: true,
        }]
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};

export default nextConfig;
