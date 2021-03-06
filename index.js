module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    indentation: 2,
    'selector-max-id': 10,
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'after-same-name',
          'inside-block',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'first-nested',
          'inside-block',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless'
        ],
        ignoreAtRules: ['array', 'of']
      }
    ],
    'number-leading-zero': 'always',
    'string-quotes': 'single',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'block-opening-brace-newline-after': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'comment-empty-line-before': 'always',
    'max-nesting-depth': 4,
    'scss/at-extend-no-missing-placeholder': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-order': [
      'content',
      'position',
      'display',
      'left',
      'top',
      'right',
      'bottom',
      'width',
      'height',
      'min-width',
      'min-height',
      'max-width',
      'max-height',
      'margin',
      'padding',
      'opacity',
      'visibility',
      'background',
      'color',
      'border',
      'border-radius',
      'box-shadow',
      'font-family',
      'font-weight',
      'line-height',
      'text-align',
      'transition',
      'transform',
      'z-index',
      'pointer-events',
      'cursor'
    ]
  }
}
