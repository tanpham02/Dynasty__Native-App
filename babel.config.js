module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      'react-native-reanimated/plugin',
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@/*': './src/*',
          },
          extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
        },
      ],
    ],
  };
};
