const makeTodo = require("./makeTodo");

const todos = [];

const fakeTodo1 = makeTodo('Walk the dog');
const fakeTodo2 = makeTodo('Wash the dishes')
fakeTodo2.isComplete = true;
todos.push(fakeTodo1, fakeTodo2)

module.exports = todos;