module.exports = {
  processors: [],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'], //, 'stylelint-config-rational-order'
  rules: {
    // 'at-rule-empty-line-before': 'always' | 'never',
    // 'at-rule-name-case': 'lower' | 'upper',
    'selector-class-pattern': null,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'comment-empty-line-before': null,
    'value-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include'],
      },
    ],
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'property-no-unknown': null,
  },
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
};

// export default stylelintConfing;
