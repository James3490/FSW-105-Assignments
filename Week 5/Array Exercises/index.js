//.filter
//1
// const arr = [3, 6, 8, 2]
// const fiveAndGreaterOnly = arr.filter(num => num > 5)
// console.log(fiveAndGreaterOnly)

//2
// const arr = [3, 6, 8, 2]
// const evensOnly = arr.filter(num => num % 2 == 0)
// console.log(evensOnly)

//3
// const arrayString = ['dog', 'wolf', 'by', 'family', 'eaten'] 
// var fiveCharactersOrFewerOnly = arrayString.filter(element => element.length < 5)
// console.log(fiveCharactersOrFewerOnly)

//4
// const peopleWhoBelongToTheIlluminati = [
//     { name: "Angelina Jolie", member: "true" },
//     { name: "Eric Jones", member: "false" },
//     { name: "Paris Hilton", member: "true" },
//     { name: "Kayne West", member: "false" },
//     { name: "Bob Ziroll", member: "true" },
// ]
// const member = peopleWhoBelongToTheIlluminati.filter(member => member.member == "true")
// console.log(member)

//5
// const ofAge = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
// ]
// const isOfAge = ofAge.filter(age => age.age >= 18)
// console.log(isOfAge)

//.map
//1
// const num = [2, 5, 100]
// const doubleNumbers = num.map(num => num * 2)
// console.log(doubleNumbers)

//2
// const StringItUp = [2, 5, 100]
// const newArr = StringItUp.map(num => num.toString())
// console.log(newArr)

//3
// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// const lowerCase = arr.map(low => low.toLowerCase())
// const capitalizeNames = lowerCase.map(caps => caps.charAt(0).toUpperCase()+ caps.slice(1))
// console.log(capitalizeNames)

//4
// const person = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
// ]
// const pName = person.map(nam => nam.name)
// console.log(pName)

//5 NOT DONE!
const person = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }]
// const pName = persons.map(nam => nam.name)
// const pAge = persons.map(ages => ages.age) 
// const isOldEnough = 
for(var i = 0; i < person.length; i++) {
     if (person.age > 18) {
        console.log(person.name + (" Is old enough to go to the Matrix")) } else if(person.age[i] < 18) {
        return (person.name + (" is not old enough to go to the Matrix"))
    }}
    console.log(person.age[i])
// const isOldEnough = (arr => arr.map(object => (object.age < 18 ? object.name : object.age)))
// console.log(isOldEnough(person) + (" Is old enough to go to the Matrix"))

//6 NOT DONE
// const person = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },]
//     const pName = person.map(nam => nam.name);
//     const pAge = person.map(howOld => howOld.age)
//     console.log(<h1>pName</h1> + <h2>pAge</h2>)

//.reduce
//1
// const num = [1, 2, 3]
// console.log(
//   num.reduce((a, b) => a + b, 0)
// )

//2
// const num = [1, 2, 3] 
// const num2 =
// num.reduce((a, b) => a + b, '');
// console.log(num2)

//3
// const voters = [
//     {name: "Bob", age: 30, voted: true},
//     {name: "Jake", age: 32, voted: true},
//     {name: "Kate", age: 25, voted: false},
//     {name: "Sam", age: 20, voted: false},
//     {name: "Phil", age: 21, voted: true},
//     {name: "Ed", age: 55, voted: true},
//     {name: "Tami", age: 54, voted: true},
//     {name: "Mary", age: 31, voted: false},
//     {name: "Becky", age: 43, voted: false},
//     {name: "Joey", age: 41, voted: true},
//     {name: "Jeff", age: 30, voted: true},
//     {name: "Zack", age: 19, voted: false}
// ]
// const voterObj = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final.didVote++
//     } else {
//         final.didntVote++
//     }
//     return final
// }, { didVote: 0, didntVote: 0 })

// console.log(voterObj)

//4
// const wishList = [
//     {title: "Tesla Model S", price: 90000},
//     {title: "4 carat diamond ring", price: 45000},
//     {title: "Fancy hacky Sack", price: 5},
//     {title: "Gold fidgit spinner", price: 2000},
//     {title: "A second Tesla Model 5", price: 90000}
// ]
// const price = wishList.reduce(function(prev, cur) {
//     return prev + cur.price;
//   }, 0);
//   console.log('Total Cost: ', price);

//5 NOT DONE
// const toFlatten = [
//     ['1', '2', '3']
//     [true],
//     [4, 5, 6]
// ];
// const arr = toFlatten.reduce((a, b) => a.concat + b, []);
// console.log(arr)

//6

// sort
// 1
// const lToG = [1, 3, 5, 2, 90, 20]
// lToG.sort((a, b) => a - b)
// console.log(lToG)

//2
// const lToG = [1, 3, 5, 2, 90, 20]
//     lToG.sort((a, b) => b - a)
//     console.log(lToG)

//3
// const lengthShort = ['dog', 'wolf', 'by', 'family', 'eaten']
// lengthShort.sort((a, b) => a.length - b.length)
// console.log(lengthShort)

//4
// const alphabetical = ['dog', 'wolf', 'by', 'family', 'eaten']
// alphabetical.sort((a, b) => a > b);
// console.log(alphabetical)

//5
// const byAge = [
//     {name: 'Quiet Samurai', age: 22},
//     {name: 'Arrogant Ambassador', age: 100},
//     {name: 'Misunderstood Observer', age: 2},
//     {name: 'Unlucky Swami', age: 77}
// ]
// byAge.sort((a, b) => a.age - b.age)
// console.log(byAge)

