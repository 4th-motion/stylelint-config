module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss', './selector-attribute-unquoted-identifiers'],
  customSyntax: 'postcss-scss',
  rules: {

    // general rules
    'max-nesting-depth': 6,
    'selector-pseudo-element-colon-notation': 'single',
    'import-notation': 'string',
    'media-feature-name-no-unknown': true,

    // a single Stylelint mode cannot express unquoted identifiers with quoted string values
    'selector-attribute-quotes': null,
    '@4th-motion/selector-attribute-unquoted-identifiers': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'function-no-unknown': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'media-query-no-invalid': null,
    'annotation-no-unknown': null,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],

    // at-rule rules
    'no-invalid-position-at-import-rule': null,
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
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/at-extend-no-missing-placeholder': true,

    // comment rules
    'comment-empty-line-before': 'always',
    'no-invalid-double-slash-comments': null,

    // empty lines before rules
    'custom-property-empty-line-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: ['after-comment']
      }
    ],

    // order rules
    'order/properties-order': [
      'content',

      // position and stacking
      'position',
      'inset',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',

      // layout
      'display',
      'box-sizing',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'visibility',

      // flex and grid
      'flex',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'justify-content',
      'align-items',
      'align-content',
      'align-self',
      'order',
      'gap',
      'row-gap',
      'column-gap',
      'grid',
      'grid-template',
      'grid-template-columns',
      'grid-template-rows',
      'grid-column',
      'grid-row',
      'place-items',
      'place-content',

      // dimensions and spacing
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      // typography
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'line-height',
      'letter-spacing',
      'text-align',
      'text-transform',
      'text-decoration',
      'white-space',
      'word-break',

      // visual appearance
      'color',
      'background',
      'background-color',
      'background-image',
      'border',
      'border-radius',
      'outline',
      'opacity',
      'box-shadow',
      'filter',

      // interaction and motion
      'transition',
      'transform',
      'pointer-events',
      'user-select',
      'animation',
      'cursor'
    ]
  }
}
