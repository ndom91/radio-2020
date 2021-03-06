module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 450ms ease-in-out forwards",
        fade: "fade 250ms ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fade: {
          "0%": { opacity: 0, visibility: "hidden" },
          "100%": { opacity: 1, visibility: "visible" },
        },
      },
      boxShadow: {
        "lg-green": "0 10px 15px -2px rgba(103, 178, 70, 0.1)",
      },
      colors: {
        "newtelco-500": "#67B246",
        "newtelco-600": "#57963b",
        "newtelco-700": "#467a30",
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
      width: {
        130: "130vw",
      },
      rotate: {
        z60: "rotate3d(0, 1, 0, 60deg)",
        y30: "rotateY(-30deg)",
      },
    },
  },
  variants: { animation: ["motion-safe"] },
  plugins: [require("@tailwindcss/custom-forms")],
}
