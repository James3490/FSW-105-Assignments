// 1
var numOfAnswers = 0;
var answers = [ "stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer" ];
console.log(answers.toString().match(/computer/g).length);

2
var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male",
}, {
    name: "Madeline",
    age: 80,
    gender: "female",
}, {
    name: "Cheryl",
    age: 22,
    gender: "female",
}, {
    name: "Sam",
    age: 30,
    gender: "male",
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]
for(let x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[x].age >= 18){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is old enough");
    }else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is not old enough");
    } 
}

// 3
for(let x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[x].age >= 18){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is old enough to see Mad Max.");
    }else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is not old enough to see Mad Max.");
    } 
}

// 4
for(let x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[x].age >= 18){

if (peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "male"){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is old enough to see Mad Max Fury Road, let HIM in.");
} else if (peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "female"){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is old enough to see Mad Max Fury Road, let HER in.");
}
} else if 
(peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "male"){
console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");
} else {
(peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "female")
console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is not old enough to see Mad Max Fury Road, don't let HER in.");
}}

// 5
for (var i = 0; i < 101; i++) {
    if ((i % 2) === 0) {
        console.log(i + ' ' + "is even")
    } else {
        console.log(i + ' ' + "is odd")
    }
} 

