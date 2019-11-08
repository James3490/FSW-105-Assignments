var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var num1 = readlineSync.question ('What is your first number?');

var num2 = readlineSync.question ('What is your second number?');

var operation = readlineSync.question ('Please enter the operation to perform: + - * /')

switch(operation) {
    case "+":
    console.log((userName), "The result is: ",(num1) + (num2));
    break;
    case "-":
    console.log((userName), "The result is: ",  (num1) - (num2));
    break;
    case "*":
    console.log((userName), "The result is: ",(num1) * (num2));
    break;
    case "/":
    console.log((userName), "The result is: ",(num1) / (num2));
    break;
}