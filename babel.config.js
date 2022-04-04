module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@theme': './src/theme',
          '@i18n': './src/i18n',
        },
      },
    ],
    ['react-native-reanimated/plugin']
  ],
};
