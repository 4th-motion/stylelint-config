#!/usr/bin/env node
/* eslint-disable no-console, consistent-return */
const fs = require('fs')
const arg = require('arg')
const chalk = require('chalk')
const path = require('path')

const args = arg({ '--force': Boolean })

console.log(chalk`          Initiating stylelint configuration.`)

// get package.json content
const getPackageContent = (packagePath) => {
  try {
    return fs.readFileSync(packagePath, 'utf-8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(chalk`{bold.red [ERROR]  } No package.json was found in {underline ${packagePath}}.`)
      process.exit(1)
    }
  }
}

const PACKAGE_FILENAME = 'package.json'
const packagePath = path.join(process.cwd(), PACKAGE_FILENAME)
const pkg = JSON.parse(getPackageContent(packagePath))

// logging messages
const messageAdded = (name) => chalk`{bold.magenta [ADDED]  } {bold ${name}} in ${PACKAGE_FILENAME}.`
const messageCantOverwrite = (name) =>
  chalk`{bold.red [ERROR]  } can't overwrite {bold ${name}} in ${PACKAGE_FILENAME}. Use {underline --force} to overwrite the existing value.`
const messageWasOverwritten = (name) =>
  chalk`{bold.yellow [WARNING]} {bold ${name}} in ${PACKAGE_FILENAME} was overwritten.`

const handleOverwrite = (key, name) => {
  if (key) {
    if (args['--force']) {
      console.warn(messageWasOverwritten(name))
    } else {
      console.error(messageCantOverwrite(name))
      process.exit(2)
    }
  } else {
    console.log(messageAdded(name))
  }
}

// add script `lint` to package.json
handleOverwrite(pkg.scripts['lint:scss'], 'lint:scss')
pkg.scripts['lint:scss'] = '4th-stylelint *.scss --color --fix'

// add `stylelint`
handleOverwrite(pkg.stylelint, 'stylelint')
pkg.stylelint = { extends: ['@4th/stylelint-config'] }

// add pre-commit script to package.json
const GIT_HOOKS_NAME = '@4th/git-hooks'

if (pkg.devDependencies[GIT_HOOKS_NAME]) {
  console.log(
    chalk`{cyanBright.bold [INFO]   } found {underline ${GIT_HOOKS_NAME}} in ${PACKAGE_FILENAME}. Adding a lint step to the {underline pre-commit} hook.`
  )

  // add script `lint:staged` to package.json
  const LINT_STAGED_SCRIPTNAME = 'lint:scss:staged'

  handleOverwrite(pkg.scripts[LINT_STAGED_SCRIPTNAME], LINT_STAGED_SCRIPTNAME)
  pkg.scripts[
    LINT_STAGED_SCRIPTNAME
  ] = `git diff --diff-filter=ACMRT --cached --name-only '*.scss' | xargs 4th-stylelint`

  // add pre-commit task
  pkg.git = pkg.git || {}

  if (!pkg.git['pre-commit']) {
    pkg.git['pre-commit'] = LINT_STAGED_SCRIPTNAME
  } else {
    if (typeof pkg.git['pre-commit'] === 'string') {
      pkg.git['pre-commit'] = [pkg.git['pre-commit']]
    }

    // add task only if it does not yet exist
    if (!pkg.git['pre-commit'].filter((task) => task === LINT_STAGED_SCRIPTNAME).length) {
      pkg.git['pre-commit'].unshift(LINT_STAGED_SCRIPTNAME)
    }
  }

  console.log(messageAdded('pre-commit'))
}

// write to package.json
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, '  '), 'utf-8')

console.log(chalk`{bold.green [SUCCESS]} Stylelint configuration initialized!`)
console.log(chalk`          You can now start using {underline yarn lint:scss} to check your code.`)
