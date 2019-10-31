// Preliminaries
// Write an if statement that prints "is greater than" if 5 is greater than 3
// if(5 > 3) {
//     console.log("Five is greater than 3")
// }

// write an if statement that prints "is the length" if the length of "cat" is 3
// var cat = "cat"
// if(cat.length === 3) {
//         console.log("Cat is the length of three")
// }

// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
// if("cat" === "dog") {
//     console.log( "cat is equal to dog")
// } else {
//     console.log("not the same")
// }


// Bronze Medal
// var person = {
//     name: "Bobby",
//     age: 12,
// }
// write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
// if(person.age >= 18) {
//     console.log(person.name, "is allowed to go to the movie")
// }else {
//     console.log(person.name, "is not allowed to go to the movie")
// }

// using that same object, only allow them into the movie if their name starts with "B".
// if(person.name.charAt(0) === "B") {
//     console.log(person.name, "is allowed to go to the movie")
// } else {
//     console.log(person.name, "is not allowed to go to the movie")
// }

// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
// if(person.name.charAt(0) === "B" && person.age >= 18) {
//     console.log(person.name, "is allowed to go to the movie")
// } else {
//     console.log(person.name, "is not allowed to go to the movie")
// }

// Silver Medal

// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
// if(1 === "1") {
//     console.log("strict")
// } else if(1 == "1") {
//     console.log("loose")
// } else (
//     console.log("not eqaul at all")
// )

// Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.
// if(1 <= 2 && 2 === 4) {
//     console.log("yes")
// }

// Gold Medal
// Write an if statement that checks to see if "dog" is a string
// console.log(typeof "dog");

// Write an if statement that checks to see if "true" is a boolean
// console.log(typeof "true");

// Write an if statement that checks to see if a variable has been defined or not
// var x = "boy"
//   console.log(typeof x);

// Write an if statement asking if "s" greater than 12?
// if("s" > 12) {
//     console.log("s is greater than 12")
// }else {
//     console.log("s is not greater than 12")
// }

// Try it with a few more letters and a few numbers.
// if("b" > 10) {
//     console.log("b is greater than 10")
// }else {
//     console.log("b is not greater than 10")
// }

// if("Z" > 100) {
//     console.log("Z is greater than 100")
// }else {
//     console.log("Z is not greater than 1")
// }

// if(26 < "T") {
//     console.log("26 is less than T")
// }else {
//     console.log("26 is not less than T")
// }

// Write a ternary statement that console.logs whether a number is odd or even.
// var n = 15
// n % 2 == 0 ? console.log("Even") : console.log("Odd");

if (2 !== 2) {
    console.log(false)
} else { console.log(true)
}