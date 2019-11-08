var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var num1 = readlineSync.question ('What is your first number?');

var num2 = readlineSync.question ('What is your second number?');

var operation = readlineSync.question ('Please enter the operation to perform: + - * /: ')

switch(operation) {
    case "+":
        console.log('The result is: ',  Number(num1) + Number(num2));
    break;
    case "-":
    console.log('The result is: ',  Number(num1) - Number(num2));
    break;
    case "*":
    console.log('The result is: ',Number(num1) * Number(num2));
    break;
    case "/":
    console.log('The result is: ',Number(num1) / Number(num2));
    break;
}