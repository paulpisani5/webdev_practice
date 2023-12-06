// ORDER OF OPERATIONS
let x = (10*5) + 20; 
console.log(x);

let y = 10;
if (y > 20) { 
    console.log("Greater than 20 :)") ; 
} else {
    console.log("Less than 20 :(") ; 
}

let z = 30; 
if (z < 20) { 
    console.log("Less than 20"); 
} else if (z < 40) {
    console.log("Greater than 20 but less than 40"); 
} else {
    console.log("Greater than 40")
}


let a = 10
switch (10 * 4) {
    case 20:
        consolee.log("It's 20");
        break;
    case 40:
        console.log("It's 40");
        break;
    default: 
        console.log("It's not 20 or 40");
} 

let example = "orange";
switch (example) {
    case "red":
        console.log("It's red"); 
        break;
    case "orange":
        console.log("It's orange"); 
        break;
    case "yellow":
        console.log("It's yellow");
        break; 
    default: 
        console.log("It's none of these"); 
}

let var1 = 20;
let var2 = 50;
result = (var1 > var2) ? "var1 greater than var2" : "var1 less than or equal to var2"; 
console.log(result);

for (let i = 1; i<5; i++) {
    console.log(i); 
}

let person = {
    name: "Paul",
    age: 30,
    job: "Cashier"
};
for (let variable in person) { 
    console.log(person[variable]); 
}

let numbers = [1,2,3,4,5]; 
for (let x of numbers) {
    console.log(x); 
}

let xyz = 4; 
while (xyz > 1) {
    console.log("This is me in while loop"); 
    xyz--;
}

function square(x) {
    return x*x
};
console.log(square(5)); 

cube = (x) => {
    return x * x * x;
}
console.log(cube(3)); 



function outer(x) {
    function innerSquare(y) {
        return y * y 
    }; 
    function innerCube(z) {
        return z * z * z 
    }; 
    return innerSquare(x) + innerCube(x) 
}
output = outer(2); 
console.log(output);


var sampleString = "This is a string"
console.log(sampleString.length);

var str1 = "Hello";
var str2 = "World!";
console.log(str1 + " " + str2); 
console.log(str1.concat(str2));
console.log(str1.indexOf('e'));
console.log(str1.toLowerCase());
console.log(str1.slice(1));
console.log(str1.replace("ello", "ey"));

var list1 = [1,2,3,4,5]
console.log("array length: ", list1.length); 
list1.push(6);
console.log(list1); 
list1.pop();
console.log(list1);
list1.shift();
console.log(list1);
list1.unshift(1);
console.log(list1);
console.log(list1.slice(2,4));
// splice? 

var array2 = [1, 2, 3]; 
for (var i = 0; i < array2.length; i++) {
    console.log(array2[i]); 
}

function printNumber(x) {
    console.log(x);
}
array2.forEach(printNumber); 

for (var item of array2) {
    console.log(item * 3); 
}

let list3 = [1,2,3,4]; 
let mapList3 = list3.map(function (element){
    return element * 2;
})
console.log(mapList3);

// let list4 = [1,2,3]
// let reduceList4 = list4.reduce(function (acc, curr) {
//     return acc + cur 
// })
