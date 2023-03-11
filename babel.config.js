module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
