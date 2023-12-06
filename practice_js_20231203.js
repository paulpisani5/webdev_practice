console.log("Hello world!"); 

// NUMBERS
let a; // let is block-scoped, while var is function-scoped -- let generally preferred
let b = 10; // variable names are case sensitive, can't start with number, can only contain letters / digits / underscores / dollar signs
let c = 20; // c can be reassigned
const d = 30; // d can't be reassigned
console.log(c);
c = 50;
console.log(c);
console.log(""); 

// STRINGS
let str1 = "hello";
let str2 = "world";
let str3 = str1 + " " + str2 
console.log(str3);
console.log(""); 

// BOOLEANS
let x = true; 
console.log(x); 
console.log(""); 

// OBJECTS -- mutable (above examples are immutable)
let obj1 = {name: "Paul", age: 10};
console.log(obj1.name); 
console.log(""); 

// OPERATORS 
let num1 = 10; 
num1 *= 5; 
console.log(num1); 
let bool1 = true; 
let bool2 = 10 <= 5;
console.log(bool1 || bool2); 
console.log(bool1 && bool2); 

// IF ELSE STATEMENTS
let example = 5; 
if (example > 10) {
    console.log("var > 10"); 
} else {
    console.log("var <= 10"); 
}
console.log(""); 

// IF ELSE LADDER 
let example2 = 10;
if (example2 < 2) {
    console.log("Var < 2") ; 
} else if (example2 <5) {
    console.log("Var < 5"); 
} else if (example2 < 20) {
    console.log("Var < 20"); 
} else {
    console.log("Var < 40"); 
}
console.log(""); 

// SWITCH CASE
let xyz = "orange"; 
switch (xyz) {
    case "apple":
        console.log("It's an apple");
        break; 
    case "orange":
        console.log("It's an orange");
        break; 
    case "bannana":
        console.log("It's a banana");
        break; 
    default:
        console.log("It's something else");
}
console.log(""); 

// TERNARY OPERATORS
let aa = 10;
let bb = 20;
let cc;
cc = (bb < aa) ? bb : aa; // condensed if statement --> if true then bb else aa 
console.log(cc);
console.log(""); 

// FOR LOOPS
for (let i = 1; i < 3; i++) {
    console.log(i);
} 
let person = {name: "Paul", age: 20}; 
for (key in person) {
    console.log(key + ": " + person[key]); 
} 
let numbers = [1,2,3,4];
for (let number of numbers) {
    console.log(number); 
} 