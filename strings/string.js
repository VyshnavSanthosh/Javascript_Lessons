// // string is a sequence of charectors

// let my_name = "vyshnav";
// console.log(`hello ${my_name}`);

// // Concatenate

// let a = "hello";
// let b = "world";
// console.log(a +" "+ b);

// // Slicing

// let str = "Hello World";
// console.log(str.slice(6));
// console.log(str.slice(0,6));

// // Replace

// let old_str = "Hello World";
// let new_str = old_str.replace("World", "JavaScript");
// console.log(new_str);

// let modnew_str = new_str.replaceAll("l", "L");  
// console.log(modnew_str);


// // Case Transformations

// let case_str = "Hello World";
// console.log(case_str.toUpperCase());
// console.log(case_str.toLowerCase());
// // Whitespace and Padding

// let pad_str = "  Hello  ";
// console.log(pad_str);
// console.log(pad_str.trim());        // remove whitespace form both sides
// console.log(pad_str.trimStart());   // remove whitespace form start 
// console.log(pad_str.trimEnd());     // remove whitespace form end

// // Length

// let len_str = "Hello World";
// console.log(len_str.length);

// // Splitting and Joining

// let split_str = "Hello,World";
// console.log(split_str.split(","));
// console.log(split_str.split(",")[1]);

// let join_str = ["Hello", "World"];


// Check it is palindrome 

// let name = 'ollo';
// let reversed = name.split('').reverse().join('');
// if (name === reversed)console.log(`${name} is a palindrome`);
// else console.log(`${name} is not a palindrome`);

//      or

let name = 'helleh';
let rev = '';
for (let i = name.length - 1; i >= 0; i++){
    rev += name.charAt(i);
}
console.log(rev);


// toggle small case and capital case

function toggleCase(str) {
    let result = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

// Example usage
let input = "HeLLo WoRLd!";
let toggled = toggleCase(input);
console.log(toggled); // hEllO wOrlD!
