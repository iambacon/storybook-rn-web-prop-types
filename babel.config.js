module.exports = {
  env: {
    development: {
      plugins: [
        ['react-docgen', {DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES'}],
      ],
    },
  },

  presets: ['module:metro-react-native-babel-preset'],
};
