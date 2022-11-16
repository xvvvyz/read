module.exports = {
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },
};
