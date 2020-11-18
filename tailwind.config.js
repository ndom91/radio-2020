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
        gray: {
          100: "#f6f6f6",
          200: "#e4e4e4",
          300: "#cbcbcb",
          400: "#ababab",
          500: "#898989",
          600: "#666666",
          700: "#454545",
          800: "#292929",
          900: "#0d0d0d",
        },
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
