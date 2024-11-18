let my_name = "vyshnav";
console.log(`hello ${my_name}`);

// Concatenate

let a = "hello";
let b = "world";
console.log(a +" "+ b);

// Slicing

let str = "Hello World";
console.log(str.slice(6));
console.log(str.slice(0,6));

// Replace

let old_str = "Hello World";
let new_str = old_str.replace("World", "JavaScript");
console.log(new_str);

let modnew_str = new_str.replaceAll("l", "L");  
console.log(modnew_str);


// Case Transformations

let case_str = "Hello World";
console.log(case_str.toUpperCase());
console.log(case_str.toLowerCase());
// Whitespace and Padding

let pad_str = "  Hello  ";
console.log(pad_str);
console.log(pad_str.trim());        // remove whitespace form both sides
console.log(pad_str.trimStart());   // remove whitespace form start 
console.log(pad_str.trimEnd());     // remove whitespace form end

// Length

let len_str = "Hello World";
console.log(len_str.length);

// Splitting and Joining

let split_str = "Hello,World";
console.log(split_str.split(","));
console.log(split_str.split(",")[1]);

let join_str = ["Hello", "World"];