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
      rotate: {
        z60: "rotate3d(0, 1, 0, 60deg)",
        y30: "rotateY(-30deg)",
      },
    },
  },
  variants: {},
  plugins: [],
};
