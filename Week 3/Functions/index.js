// 1
function sum(num1, num2) {
    return (num1 * num2)
}
var result = sum(4, 6)
console.log(result)

// 2
console.log(Math.max(23, 119, 10));

// 3
function isEven(num) {
    if(num % 2 == 0) {
    return num + " " + "is even";
} 
else {
    return num + " " + "is odd";
}
}
console.log(isEven(13))


// 4
var rhyme = "Soft kitty. "
var rhyme2 = "Warm kitty. Little ball of fur."
function concat() {
    if (rhyme.length <= 20) { 
    return(rhyme + rhyme2);
} else {
    return rhyme.slice(0, rhyme.length / 2)
}
}
console.log(concat())