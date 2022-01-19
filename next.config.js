module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
}
