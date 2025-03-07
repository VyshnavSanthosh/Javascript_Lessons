// Creating a new map

let map1 = new Map();

// or

let map2 = new Map([
    ["name", "Vyshnav"],
    ["age", 20],
    ["city", "Kannur"]
])

// Adding values in a map

map1.set("name", "Rohit");
map1.set("age", 20);
map1.set("city", "Kannur");

// Accessing values in a map

console.log(map1.get("name"));
console.log(map1.get("age"));


// Removing values from a map

map1.delete("city");

// Checking if a key exists in a map

console.log(map1.has("name"));
console.log(map1.has("city"));

// size of the map

console.log(map1.size);

// Clearing the map


// Iterating over a map

for(let key of map1.keys()){
    console.log(key);
    
}

for(let value of map1.values()){
    console.log(value);
}

map2.forEach((key,value) => {
    console.log(key,value);
    
});