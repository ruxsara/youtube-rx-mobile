module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",

      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            constants: "./src/constants",
            hooks: "./hooks",
            store: "./src/store",
            utils: "./utils",
          },
        },
      ],
    ],
  };
};
