const stylelint = require('stylelint')
const selectorParser = require('postcss-selector-parser')

const ruleName = '@4th-motion/selector-attribute-unquoted-identifiers'
const identifier = /^-?[_a-zA-Z][_a-zA-Z0-9-]*$/
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: value => `Expected the identifier "${value}" to be unquoted`
})

module.exports = stylelint.createPlugin(ruleName, (primaryOption, secondaryOptions, context) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: primaryOption,
      possible: [true]
    })

    if (!validOptions) {
      return
    }

    root.walkRules(rule => {
      const selector = selectorParser(selectors => {
        selectors.walkAttributes(attribute => {
          if (!attribute.quoteMark || !identifier.test(attribute.value)) {
            return
          }

          if (context.fix) {
            Object.assign(attribute, { quoteMark: null })
            return
          }

          stylelint.utils.report({
            message: messages.expected(attribute.value),
            node: rule,
            result,
            ruleName,
            index: attribute.sourceIndex,
            endIndex: attribute.sourceIndex + attribute.toString().length
          })
        })
      }).processSync(rule.selector)

      if (context.fix) {
        Object.assign(rule, { selector })
      }
    })
  }
})

module.exports.ruleName = ruleName
module.exports.messages = messages
