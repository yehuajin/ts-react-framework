const postcssConfing = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true,
      },
      autoprefixer: {
        grid: true,
        flexbox: 'no-2009',
      },
    },
    'postcss-flexbugs-fixes': {},
    'postcss-normalize': {}
  },
};

export default postcssConfing;
