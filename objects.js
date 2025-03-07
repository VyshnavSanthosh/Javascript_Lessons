// Creating a new object

let obj1 = {
    name: "vyshnav",
    age: 20,
    city: "Kannur"
}

let obj2 = {
    name: "aashi",
    age: 7,
    city: "Kannur"
}

let obj3 = {
    name: "akshaya",
    age: 14,
    city: "Kannur"
}


// Accessing the properties

console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.city);

// checking the key is present

console.log("name" in obj2); // true
console.log("gender" in obj2); // false
let key = "name";
for (key in obj2){
    if (key == "name") {
        console.log(`${key} found`);
        
    }
}


// Adding a property

obj1.gender = "male";
console.log(obj1);

