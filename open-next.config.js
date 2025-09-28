// open-next.config.js
const { defineConfig } = require('@opennextjs/core');

module.exports = defineConfig({
  // Build directory (this is where OpenNext will place the built assets)
  buildDirectory: '.open-next', // Default is '.open-next'

  // Optional: environment variables (you can add your own)
  env: {
    PROTECT: "7vzxSwpc4Sz/z03rTlgpatg3WNJvyu22GgCzh9XGty4=",
    SID: '2546738MMC'
  },

  // You can also configure custom settings or use the default setupgit
});