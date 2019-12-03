//1 
// let name = "John";
// const age = 101;
// function runForLoop(pets) {
//     let petObjects = [];
//     for (var i = 0; i < pets.length; i++) {
//         const pet = {type: pets[i]}
//         let name;
//         if (pets[i] === 'cat') {
//             name = 'fluffy';
//         } else {
//             name = 'spot';
//         }
//         console.log('pet name: ', name);
//         pet.name = name;
//         petObjects.push(pet);
//     }
//     console.log('man name: ', name);
//     return petObjects;
// }
// runForLoop(['cat', 'dog']);

//2
// const carrots = ["bright orange", "ripe", "rotten"]
// const carrotTypes = carrots.map(carrot => ({type: "carrot", name: carrot}));
// console.log(carrotTypes)

//3
// const people = [
//     {name: 'Princess Peach', friendly: false},
//     {name: 'Luigi', friendly: true},
//     {name: 'Mario', friendly: true},
//     {name: 'Bowser', friendly: false}
// ]
// const filterForFriendly = people.filter(person => person.friendly)
// console.log(filterForFriendly)

//4
// const num = [4, 7]
// const doMathSum = num.reduce((a, b) => a + b, 0)
// console.log(doMathSum)

//5 & 6
// const string = (fName = 'Jane', lName = 'Doe', age = 100) => (`Hi ${fName} ${lName}, how does it feel to be ${age}?`);
// console.log(string());


//7 
// const animals = [
//     {type: 'dog', name: 'Theodore'},
//     {type: 'cat', name: 'Whiskers'},
//     {type: 'pig', name: 'Piglette'},
//     {type: 'dog', name: 'Sparky'}
// ]
// let filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);
// console.log(filterForDogs(animals));

//8
// const name = 'Janice'
// const location = 'Hawaii'
// const example = `Hi ${name}!
//     Welcome to ${location}.
//     'I hope you enjoy your stay. Please ask the President of ${location} if you need anything.`;
// console.log(example)

