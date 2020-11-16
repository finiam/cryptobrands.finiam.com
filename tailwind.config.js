module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.js",
      "./src/**/*.njk",
      "./src/**/*.liquid",
      "./src/**/*.ts",
    ],
  },
  theme: {
    screens: {
      md: "800px",
    },
    scale: {
      101: "1.01",
    },
    fontSize: {
      tiny: "0.8rem",
      base: "1rem",
      md: "1.4rem",
    },
    minHeight: {
      180: "180px",
      250: "250px",
    },
    maxWidth: {
      950: "950px",
      xl: "1280px",
    },
    colors: {
      purple: {
        dark: "#09001A",
        lighter: "#EEEAF5",
      },
      white: "#FFFFFF",
      green: "#5EF38B",
      gray: {
        default: "#757575",
        lighter: "#E1E1E1",
        lightest: "#FCFCFC",
      },
    },
    extend: {
      gap: {
        5: "1.4rem",
      },
      textOpacity: {
        80: "0.80",
      },
      backgroundOpacity: {
        95: "0.95",
      },
    },
  },
};
