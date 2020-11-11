const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    isProd && require("autoprefixer"),
    require("tailwindcss"),
    isProd && require("cssnano"),
  ].filter((plugin) => !!plugin),
};
