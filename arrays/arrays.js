// Define an array of numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach Loop
// Iterate over each element in the array and log its value, index, and the array itself
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// for...of Loop
// Iterate over each element in the array and log the element plus 2
for (const element of arr) {
    console.log(element + 2);
}

// pop Method
// Remove the last element from the array
arr.pop();
console.log(arr); // Log the updated array

// push Method
// Add a new element (11) to the end of the array
arr.push(11);
console.log(arr); // Log the updated array

// shift Method
// Remove the first element from the array
arr.shift();
console.log(arr); // Log the updated array

// unshift Method
// Add a new element (0) to the beginning of the array
arr.unshift(0);
console.log(arr); // Log the updated array

// splice Method
// Remove the first three elements from the array
arr.splice(0, 3);
console.log(arr); // Log the updated array

// reverse Method
// Reverse the order of elements in the array
arr.reverse();
console.log(arr); // Log the reversed array

// map Method
// Create a new array with each element doubled
let newarr = arr.map((value, arr, index) => {
    return value * 2;
});
console.log(newarr); // Log the new array

// filter Method
// Define a function to check if a value is greater than 12
const greaterThan12 = (e) => {
    if (e > 12) return true;
    else return false;
};

// Filter the new array to include only values greater than 12
console.log(newarr.filter(greaterThan12));

// reduce Method
// Define a function to add two adjacent values
const add = (a, b) => {
    return a + b;
};

// Reduce the new array to a single sum
console.log(newarr.reduce(add));

// Array.from Method
// Convert a string into an array of characters
console.log(Array.from("hello world"));
