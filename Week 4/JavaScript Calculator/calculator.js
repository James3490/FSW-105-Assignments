const readlineSync = require('readline-sync');

while (true) {
const num1Int = readlineSync.questionInt('What is your first number?');

const num2Int = readlineSync.question ('What is your second number?');

const operation = readlineSync.question ('Please enter the operation to perform: + - * / or Q to quit: ')

if(operation == "+") {
    console.log(Number(num1Int) + Number(num2Int));
} else if (operation == "-") {
    console.log(Number(num1Int) - Number(num2Int))
} else if (operation == "*") {
    console.log(Number(num1Int) * Number(num2Int))
} else if(operation == "/") {
    console.log(Number(num1Int) * Number(num2Int))
} else if(operation == "q") {
    break;
}
} 