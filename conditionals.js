// Generate a number whithout incluiding 2, the maximum would be 1.9999999...
var someNumber = Math.floor(Math.random() * 2); 

if (someNumber === 0) {
    console.log("hay pancito choco")
} else {
    console.log("no hay pan choco")
}

console.log("The random number was " + someNumber)

var a = 2;
var b = "2";

if (a === b) {
    console.log("a equals b")
}

if (a == b) {
    console.log("a equals b whithout incluiding data type")
}