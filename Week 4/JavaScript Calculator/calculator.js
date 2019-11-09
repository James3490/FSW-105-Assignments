var readlineSync = require('readline-sync');

while (true) {
var num1Int = readlineSync.questionInt('What is your first number?');

var num2Int = readlineSync.question ('What is your second number?');

var operation = readlineSync.question ('Please enter the operation to perform: + - * /: ')

if(operation == "+") {
    console.log(Number(num1Int) + Number(num2Int));
} else if (operation == "-") {
    console.log(Number(num1Int) - Number(num2Int))
} else if (operation == "*") {
    console.log(Number(num1Int) * Number(num2Int))
} else if(operation == "/") {
    console.log(Number(num1Int) * Number(num2Int))
}
} 

