var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1
vegetables.pop();
console.log(vegetables)

//2
fruits.shift()
console.log(fruits)

//3
var indexOfOrange = fruits.indexOf("orange")
console.log(indexOfOrange)

//4
fruits.push(indexOfOrange)
console.log(fruits)

//5
var vegieLength = vegetables.length
console.log(vegieLength) 

//6
vegetables.push(vegieLength)
console.log(vegetables)

//7
var food = fruits.concat(vegetables)
console.log(food)

//8
var newFoodList = food.splice(4, 2)
console.log(food)

//9
var reversedList = food.reverse()
console.log(reversedList)

//10
console.log(reversedList.toString())