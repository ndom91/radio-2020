module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "newtelco-500": "#67B246",
        "newtelco-600": "#57963b",
      },
    },
  },
  variants: {},
  plugins: [],
};
