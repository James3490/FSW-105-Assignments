//1 NOT DONE
// let name = "John";
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }, name;         
//         if (pets[i] === "cat") {
//             name = "fluffy" }
//         else {
//         name = "spot"
//              }
//         } 
//         console.log("pet name: ", name) pet.name = name 
//         petObjects.push(pet)
//         }
//         console.log("man name: ", name)
//         return petObjects
// }

//2
const carrots = ["bright orange", "ripe", "rotten"]
const carrotTypes = carrots.map(carrot => ({type: "carrot", name: carrot}));
console.log(carrotTypes)

//3
const people = [
    {name: 'Princess Peach', friendly: false},
    {name: 'Luigi', friendly: true},
    {name: 'Mario', friendly: true},
    {name: 'Bowser', friendly: false}
]
const filterForFriendly = people.filter(person => person.friendly)
console.log(filterForFriendly)

//4
const num = [4, 7]
const doMathSum = num.reduce((a, b) => a + b, 0)
console.log(doMathSum)

//5 NOT DONE
// const person = [
//     {fName: 'Jane', lName: 'Doe', age: 100}
// ]
// const name = person.reduce((a, b) => fName + lName)
// console.log(name)

//6 NOT DONE

//7 NOT DONE
// const animals = [
//     {type: 'dog', name: 'Theodore'},
//     {type: 'cat', name: 'Whiskers'},
//     {type: 'pig', name: 'Piglette'},
//     {type: 'dog', name: 'Sparky'}
// ]
// function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === 'dog') {
//             return true
//         } else {
//             return false
//         }
//     })
// }

//8
const name = 'Janice'
const location = 'Hawaii'
const example = `Hi ${name}!
    Welcome to ${location}.
    'I hope you enjoy your stay. Please ask the President of ${location} if you need anything.`;
console.log(example)

