# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.8] - 2026-09-10

### Changed

- Removed the direct `stylelint-config-recommended` extension and dependency.
  `stylelint-config-standard` already extends it, so this avoids duplicate
  configuration without changing the effective recommended rules.
- Documented the attribute-selector convention: omit quotes for CSS identifier
  values, but keep them for string values such as ratios, decimals, URLs, and
  empty strings. `selector-attribute-quotes` remains disabled because its
  `"never"` mode would turn those valid selectors into invalid CSS. Added a
  fixable custom rule that removes quotes only from safe ASCII identifiers.
- Generated `lint:scss` and staged lint scripts now report violations without
  `--fix` or `--quiet`; `lint:scss:fix` is an explicit opt-in command. The
  staged command no longer relies on GNU-only `xargs -r`.
- Moved the overrides shared by all current consumer projects into the preset:
  `max-nesting-depth: 6`, CSS fallback duplicate declarations with different
  values, and the CSS Modules `:global()` pseudo-class.
- Expanded the partial property order with common layout, flex/grid,
  typography, visual, and interaction properties. Unknown properties remain
  unrestricted to avoid migration churn. Rules may directly follow comments.

## [1.0.7] - 2026-08-29

### Fixed

- Replaced the `4th-stylelint` shell-script bin (`bin/stylelint.sh`) with a
  Node script (`bin/stylelint.js`). Yarn Berry (v2+) executes package bins
  through a Node loader, so the shell wrapper crashed with
  `SyntaxError: Invalid or unexpected token`. The Node bin also resolves
  stylelint from this package's own dependencies, so it keeps working when
  stylelint is not hoisted into the consuming project — under Yarn 4,
  scripts only see bins of direct dependencies.

