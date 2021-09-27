module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button.tsx',
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'UXPin Merge'
};
