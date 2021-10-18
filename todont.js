const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')

console.clear()
let response = readlineSync.question(getMenu())

while (response.toLowerCase() !== 'q') {
  console.log(chalk.red.bold(`${response} is not a valid input.`))
  response = readlineSync.question(getMenu())
  console.clear()
}