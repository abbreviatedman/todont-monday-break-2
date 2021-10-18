const chalk = require('chalk')

function getMenu () {
  const menu = `${chalk.blue.bold('Choose a todo to toggle its completeness(by entering its number) or choose an option at the bottom(by letter):')}
  1. ☑️ Walk the dog.
  2. 🆇 Do the dishes.
  3. ☑️ Call the bank.
  4. 🆇 Sign up for class.
  (n) Add new todo.
  (q) Quit
  `

  return menu;
}

module.exports = getMenu;
