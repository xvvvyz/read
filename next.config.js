module.exports = {
  experimental: {
    appDir: true,
    largePageDataBytes: 128 * 100000,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/xvvvyz/read/main/README.md',
        permanent: true,
        source: '/',
      },
    ];
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },
};
