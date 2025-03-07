// Define a string to be printed repeatedly
let print = "hello world";

// Use a simple for loop to print the string 100 times
for (i = 0; i < 100; i++) {
    // Log the string to the console in each iteration
    console.log(print);
}


// Define an array of fruits
let fruits = ["apple", "banana", "orange"];

// Use a for...of loop to iterate over each fruit in the array
for (fruit of fruits) {
    // Log each fruit to the console
    console.log(fruit);
}


// Define an object representing a person
let person = { name: "John", age: 30 };

// Use a for...in loop to iterate over each property in the object
for (let i in person) {
    // Log each property name and its value to the console
    console.log(`${i} : ${person[i]}`);
}

// Define another person object
let person2 = { name: "John", age: 90 };

// Use a for...in loop with a check to ensure we only iterate over the object's own properties
for (const key in person2) {
    // Check if the property belongs to the object itself (not inherited)
    if (Object.prototype.hasOwnProperty.call(person2, key)) {
        // Get the value of the current property
        const element = person2[key];
        // Log each property name and its value to the console
        console.log(`${key} : ${element}`);
    }
}


// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use the forEach method to iterate over each number in the array
numbers.forEach(function (number) {
    // Log each number to the console
    console.log(number);
});
