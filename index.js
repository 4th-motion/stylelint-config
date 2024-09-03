module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-prettier"],
  plugins: ["stylelint-order", "stylelint-scss"],
  customSyntax: "postcss-scss",
  rules: {

    // General rules
    "string-quotes": "single",
    "indentation": 2,
    "max-nesting-depth": 5,
    "selector-attribute-quotes": null,
    "function-no-unknown": null,
    "no-descending-specificity": null,
    "no-empty-source": null,

    // At-rule rules
    "no-invalid-position-at-import-rule": null,
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "after-same-name",
          "inside-block",
          "blockless-after-same-name-blockless",
          "blockless-after-blockless",
          "first-nested"
        ],
        ignore: [
          "after-comment",
          "first-nested",
          "inside-block",
          "blockless-after-same-name-blockless",
          "blockless-after-blockless"
        ],
        ignoreAtRules: ["array", "of"]
      }
    ],
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-extend-no-missing-placeholder": true,

    // Block rules
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: ["if", "else"]
      }
    ],

    // Comment rules
    "comment-empty-line-before": "always",
    "no-invalid-double-slash-comments": null,

    // Custom property rules
    "custom-property-empty-line-before": "never",

    // Declaration block rules
    "declaration-block-semicolon-newline-after": "always",

    // Order rules
    "order/properties-order": [
      "content",
      "position",
      "display",
      "left",
      "top",
      "right",
      "bottom",
      "width",
      "height",
      "min-width",
      "min-height",
      "max-width",
      "max-height",
      "margin",
      "padding",
      "opacity",
      "visibility",
      "background",
      "color",
      "border",
      "border-radius",
      "box-shadow",
      "font-family",
      "font-weight",
      "line-height",
      "text-align",
      "transition",
      "transform",
      "z-index",
      "pointer-events",
      "cursor"
    ]
  }
};
