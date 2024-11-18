// Simple for loop

let print = "hello world"
for(i = 0; i < 100; i++){
    console.log(print)
}

// for of loop

let fruits = ["apple", "banana", "orange"]
for(fruit of fruits){
    console.log(fruit)
}

// for in loop

let person = {name: "John", age: 30}
for(let i in person){
    console.log(`${i} : ${person[i]}`)
}

let person2 = {name: "John", age:90}
for (const key in person2) {
    if (Object.prototype.hasOwnProperty.call(person2, key)) {
        const element = person2[key];
        console.log(`${key} : ${element}`)
    }
}

// forEach loop


let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(number){
    console.log(number)
})