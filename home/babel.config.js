module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['next/babel', '@babel/preset-env', '@zeit/next-typescript/babel'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-transform-classes',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-transform-literals',
      '@babel/plugin-transform-react-constant-elements',
      '@babel/plugin-transform-spread',
    ],
  };
};
