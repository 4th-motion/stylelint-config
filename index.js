module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
  customSyntax: "postcss-scss",
  rules: {

    // General rules
    "max-nesting-depth": 5,
    "selector-pseudo-element-colon-notation": "single",
    "import-notation": "string",
    "media-feature-name-no-unknown": true,
    "selector-attribute-quotes": null,
    "function-no-unknown": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "media-query-no-invalid": null,
    "annotation-no-unknown": null,

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

    // Comment rules
    "comment-empty-line-before": "always",
    "no-invalid-double-slash-comments": null,

    // Empty lines before rules
    "custom-property-empty-line-before": "never",
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-single-line-comment", "first-nested"]
      },
      {
        ignore: ["after-comment"]
      }
    ],

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
