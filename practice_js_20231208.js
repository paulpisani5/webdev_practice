function addTwo(x) {
    return x + 2 ; 
}
console.log(addTwo(2)); 

var list1 = [2,3,4,5,6]
list1.push(7); 
console.log(list1); // 2,3,4,5,6,7
list1.pop();
console.log(list1); // 2,3,4,5,6
list1.unshift(1); 
console.log(list1); // 1,2,3,4,5,6 
list1.shift(); 
console.log(list1); // 2,3,4,5,6
console.log(list1.slice(1,3)); // 3,4
list1.splice(1,0,1); 
console.log(list1); // 2,1,3,4,5,6
list1.splice(3,1,7,7); 
console.log(list1); // 2,1,3,7,7,5,6 --> the 1 deletes just that index=3, number of items being added doesn't affect

var myArray = [1,2,3];
for (var i = 0; i < myArray.length; i++) { 
    console.log(myArray[i]); 
};
myArray.forEach(function(element) { 
    console.log(2 * element); // [2,4,6]
}); 
for (var item of myArray) {
    console.log(item*item); 
};

var myArray2 = [2,4,6,7];
var myArray3 = myArray2.map(function(element) {
    return element + 3;
});
console.log(myArray3); // 5,7,9,10
var myArray4 = myArray2.filter(function(element) {
    return element % 2 === 0; 
}); 
console.log(myArray4); // 2,4,6
var myArrayReduced = myArray2.reduce(function(prev, curr) { 
    return prev - curr ; 
}); // default: first curr = value at index = 0 (2 in this case) --> 2 - 4 - 6 - 7 = -15 
console.log(myArrayReduced);
var myArrayReduced2 = myArray2.reduce(function(prev, curr) { 
    return prev - curr ; 
}, 6); // ,6) -- first curr = 6 --> 6 - 2 - 4 - 6 - 7 = -13
console.log(myArrayReduced2);

var currentDate = new Date(); 
console.log(currentDate);

var anotherDate = new Date();
anotherDate.setDate(15); // set day of month
anotherDate.setMonth(5); // set month of year
anotherDate.setYear(2022); // set year
console.log(anotherDate); 

var thirdDate = new Date(); 
console.log(thirdDate.toLocaleString()); 
console.log(thirdDate.toLocaleString('en-us', {timeZone: 'EST'})); 


console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(1.25)); // rounds down to nearest whole number
console.log(Math.ceil(1.25)); // rounds up to nearest whole number
console.log(Math.max(3,5,9)); 
console.log(Math.min(3,5,9)); 
console.log(Math.E); 
console.log(Math.PI);

console.log(Number("5.25")); 
console.log(Number(true));
console.log(parseInt("5")); 
console.log(parseFloat("4.8"));







