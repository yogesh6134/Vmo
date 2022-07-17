module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@theme': ['./src/themes'],
            '@screens': ['./src/components/screens'],
            '@common': ['./src/components/common'],
            '@constants': ['./src/constants'],
            '@actions': ['./src/actions'],
            '@utils': ['./src/utils'],
            '@services': ['./src/services'],
            '@assets': ['./assets'],
            '@mock': ['./mock'],
            '@libraries': ['./src/libraries'],
          },
        },
      ],
    ],
  };
};
