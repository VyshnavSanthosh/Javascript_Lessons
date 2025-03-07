// Define an array of numbers
let number = [1, 2, 3, 4, 5, 6];

// Use the map method to create a new array where each element is doubled
let result = number.map((a) => {
    return a * 2;
});

// Log the resulting array
console.log(result); // Output: [2, 4, 6, 8, 10, 12]


// chained function

// Define the same array of numbers

// Chain two array methods:
// 1. map: Adds 10 to each number.
// 2. filter: Includes only numbers greater than 13 in the final result.
let chained = number
    .map((a) => a + 10) // Adds 10 to each number
    .filter((a) => a > 13); // Filters numbers greater than 13

// Log the final result after chaining both methods
console.log(chained); // Output: [14, 15, 16]
