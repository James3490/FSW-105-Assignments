//1
var word = "Hello"
var uppercasedWord = word.toUpperCase();
var lowerCasedWord = word.toLowerCase();
console.log(uppercasedWord + lowerCasedWord)

// //2
var word = "Hello";
var findMiddleIndex = (word.length / 2);
console.log(Math.floor(findMiddleIndex))

//3
var word = "Hello World";
var findMiddleIndex = (word.length / 2); 
console.log(Math.floor(findMiddleIndex))

//4
var word = "Hello";
var split = (word.length / 2)
var returnFirstHalf = word.slice(0, (split))
console.log(returnFirstHalf)

//5
var word = "Hello World";
var split = (word.length / 2)
var returnFirstHalf = word.slice(0, (split))
console.log(returnFirstHalf)

//6
var word = "Hello";
var split = (word.length / 2)
var returnFirstHalf = word.slice(0, (split))
var returnSecondHalf = word.slice((split))
var wordSplit = returnFirstHalf.toUpperCase() + returnSecondHalf.toLowerCase();
console.log(wordSplit)

//7
var word = "Hello World";
var split = (word.length / 2)
var returnFirstHalf = word.slice(0, (split))
var returnSecondHalf = word.slice((split))
var wordSplit = returnFirstHalf.toUpperCase() + returnSecondHalf.toLowerCase();
console.log(wordSplit)

// var sentence = ("hey friends! practice practice practice");
// var sentenceArray = sentence.split(" ")
// console.log(sentenceArray)