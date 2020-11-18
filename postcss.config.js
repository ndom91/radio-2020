module.exports = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./src/**/*.{js,jsx,ts,tsx}"],
            defaultExtractor: (content) =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          },
        }
      : {}),
    "postcss-preset-env": { stage: 2 },
  },
};
