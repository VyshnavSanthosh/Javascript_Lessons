// // Array is a collection of elements which is of same datatype or ( different datatype ) in js
//                                 // or
// // Array is a linear data structure whhich stores multiple values in a continous manner

// // Define an array of numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// //                              forEach Method

// // Iterate over each element and log its value, index, and the whole array
// arr.forEach((value, index, array) => {
//     console.log(value, index, array);
// });
// // Output:
// // 1 0 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 2 1 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 3 2 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 4 3 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 5 4 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 6 5 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 7 6 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 8 7 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 9 8 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // 10 9 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// _____________________________________________________________________________________________________



// //                              for...of Loop

// // Iterate over each element and log the element plus 2
// for (const element of arr) {
//     console.log(element + 2);
// }
// // Output:
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
// // 11
// // 12
// _____________________________________________________________________________________________________



// //                              pop Method

// // Remove the last element from the array and log the updated array
// arr.pop();
// console.log(arr);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// _____________________________________________________________________________________________________


// //                              push Method

// // Add a new element (11) to the end of the array and log the updated array
// arr.push(11);
// console.log(arr);
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
// _____________________________________________________________________________________________________


// //                              shift Method

// // Remove the first element from the array and log the updated array
// arr.shift();
// console.log(arr);
// // Output: [2, 3, 4, 5, 6, 7, 8, 9, 11]
// _____________________________________________________________________________________________________


// //                               unshift Method

// // Add a new element (0) to the beginning of the array and log the updated array
// arr.unshift(0);
// console.log(arr);
// // Output: [0, 2, 3, 4, 5, 6, 7, 8, 9, 11]
// _____________________________________________________________________________________________________


// //                              splice Method

// // Remove 3 elements starting from index 2, and insert 20 and 30 in their place
// arr.splice(2, 3, 20, 30);
// console.log(arr);
// // Output: [0, 2, 20, 30, 6, 7, 8, 9, 11]
// _____________________________________________________________________________________________________


// //                              slice Method

// // Create a new array from elements at index 1 to 4 (not including 4)
// let sliced = arr.slice(1, 4);
// console.log(sliced);
// // Output: [2, 20, 30]
// _____________________________________________________________________________________________________


// //                              indexOf Method

// // Find the index of element 20 in the array
// let index = arr.indexOf(20);
// console.log(index);
// // Output: 2
// _____________________________________________________________________________________________________


// //                              includes Method

// // Check if array includes the element 30
// let hasThirty = arr.includes(30);
// console.log(hasThirty);
// // Output: true
// _____________________________________________________________________________________________________


// //                              concat Method

// // Concatenate arr with another array [40, 50]
// let combined = arr.concat([40, 50]);
// console.log(combined);
// // Output: [0, 2, 20, 30, 6, 7, 8, 9, 11, 40, 50]
// _____________________________________________________________________________________________________


// //                              join Method

// // Join all elements into a string separated by "-"
// let joined = arr.join("-");
// console.log(joined);
// // Output: "0-2-20-30-6-7-8-9-11"
// _____________________________________________________________________________________________________


// //                              map Method

// // Create a new array by multiplying each element by 2
// let mapped = arr.map(x => x * 2);
// console.log(mapped);
// // Output: [0, 4, 40, 60, 12, 14, 16, 18, 22]
// _____________________________________________________________________________________________________

// //                              filter Method

// // Create a new array with elements greater than 10
// let filtered = arr.filter(x => x > 10);
// console.log(filtered);
// // Output: [20, 30, 11]
// _____________________________________________________________________________________________________


// //                              reduce Method

// // Sum all elements in the array
// let sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);
// // Output: 93
// _____________________________________________________________________________________________________


// //                              some Method

// // Check if some elements are greater than 25

// let someGreaterThan25 = arr.some(x => x > 25);
// console.log(someGreaterThan25);
// // Output: false
// _____________________________________________________________________________________________________


// //                              every Method

// // Check if every element is less than 50

// let allLessThan50 = arr.every(x => x < 50);
// console.log(allLessThan50);
// // Output: true
// _____________________________________________________________________________________________________


// //                              sort Method

// // Sort the array in ascending order
// arr.sort((a, b) => a - b);
// console.log(arr);
// // Output: [0, 2, 6, 7, 8, 9, 11, 20, 30]
// _____________________________________________________________________________________________________


// //                              reverse Method

// // Reverse the order of elements in the array
// arr.reverse();
// console.log(arr);
// // Output: [30, 20, 11, 9, 8, 7, 6, 2, 0]
// _____________________________________________________________________________________________________


// //                              find Method

// // Find the first element greater than 15
// let found = arr.find(x => x > 15);
// console.log(found);
// // Output: 30
// _____________________________________________________________________________________________________


// //                              findIndex Method

// // Find the index of the first element greater than 15
// let foundIndex = arr.findIndex(x => x > 15);
// console.log(foundIndex);
// // Output: 0
// _____________________________________________________________________________________________________


// //                              flat Method

// // Flatten a nested array by one level
// let nested = [1, 2, [3, 4], [5, 6]];
// let flattened = nested.flat();
// console.log(flattened);
// // Output: [1, 2, 3, 4, 5, 6]
// _____________________________________________________________________________________________________


// //                              flatMap Method

// // Map each element to an array and flatten the result by one level
// let flatMapped = [1, 2, 3].flatMap(x => [x, x * 10]);
// console.log(flatMapped);
// // Output: [1, 10, 2, 20, 3, 30]
// _____________________________________________________________________________________________________



// //                              map Method

// // Create a new array with each element doubled
// let newarr = arr.map((value, arr, index) => {
//     return value * 2;
// });
// console.log(newarr); // Log the new array
// // Output: [60, 40, 22, 18, 16, 14, 12, 4, 0] 
// // (Based on previous arr = [30, 20, 11, 9, 8, 7, 6, 2, 0])
// _____________________________________________________________________________________________________


// //                              filter Method

// // Define a function to check if a value is greater than 12
// const greaterThan12 = (e) => {
//     if (e > 12) return true;
//     else return false;
// };
// // Filter the new array to include only values greater than 12
// console.log(newarr.filter(greaterThan12));
// // Output: [60, 40, 22, 18, 16, 14]
// _____________________________________________________________________________________________________


// //                              reduce Method

// // Define a function to add two adjacent values
// const add = (a, b) => {
//     return a + b;
// };
// // Reduce the new array to a single sum
// console.log(newarr.reduce(add));
// // Output: 192 (60+40+22+18+16+14+12+4+0)
// _____________________________________________________________________________________________________


// //                          Array.from Method

// // Convert a string into an array of characters
// console.log(Array.from("hello world"));
// // Output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
// _____________________________________________________________________________________________________




// // I have an array [1,1,0,1,0,0,1,1]
// // so what i want is to move all 0 to right and 1 to left

// // here i use Two-Pointer Technique (Fastest, O(n))

// // let arr1 = [1, 1, 0, 1, 0, 0, 1, 1];
// // let i= 0 , j = 0;
// // while (i < arr1.length) {
// //     if (arr1[i] === 1){
// //         let temp = arr1[i];
// //         arr1[i] = arr1[j];
// //         arr1[j] = temp;
// //         j++;
// //     }
// //     i++;
// // }
// // console.log(arr1);



// // left rotation by one

// let arr1 = [1,2,3,4,5];
//     let first = arr1[0];
//     for(i = 0; i < arr1.length; i++ ){
//         arr1[i] = arr1[i+1];
//     }
//     arr1[arr1.length - 1] = first;
    
// console.log(arr1);



// // // right rotation by one

// let arr2 = [1,3,5,2,6,7];
// let last = arr2[arr2.length - 1];
// for (i = arr2.length-1;i>0 ; i--){
//     console.log(arr2[i]);
//     arr2[i] = arr2[i-1];
// }
// arr2[0] = last;
// console.log(arr2);

// // left rotate by k

// let arr1 = [1,2,3,4,5];
// let k = 2

// for(j = 0 ; j<k ;j++){
//     let first = arr1[0];
//     for(i = 0; i < arr1.length; i++ ){
//         arr1[i] = arr1[i+1];
//     }
//     arr1[arr1.length - 1] = first;
    
// }
// console.log(arr1);


// right rotate by k

// let arr2 = [1,2,3,4,5];
// let k = 2

// for(j = 0 ; j<k ;j++){
//     let last = arr2[arr2.length - 1]; 
//     for (i = arr2.length-1;i>0 ; i--){
//         arr2[i] = arr2[i-1];
//     }
//     arr2[0] = last;
    
// }
// console.log(arr2);

// rotation by left by k number (optimized method time complexity = O(n) )

// rotate right by k number
// var rotate = function(nums, k) {
//     let copy = nums.slice();
//     for(i = 0; i < nums.length-1; i++ ){
//         nums[ ( i + k ) % nums.length ] = copy[i]   
//     }
// return nums;
// };

// let a = [1,2,3,4,5,6,7];
// let ans = rotate(a, 3);
// console.log(ans);  // Output: [4, 5, 6, 1, 2, 3]


// rotation by left by k number (optimized method time complexity = O(n) )

// let a = [1,2,3,4,5,6];
// let k = Number(prompt('Enter a number'))
// let temp = [];
// for (let i = 0; i <= a.length-1; i++ ){
//     temp[i] = a[(i + k) % a.length]
// }
// console.log(temp);
