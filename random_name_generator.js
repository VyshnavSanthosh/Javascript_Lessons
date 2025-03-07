let first , second , third;
let rand = Math.random();

// First
if (rand > 0.33){
    first = "crazy"
}
else if (rand < 0.33 && rand > 0.66){
    first = "scary"
}
else {
    first = "funny"
} 

// Second
if (rand > 0.33){
    second = "scary"
}
else if (rand < 0.33 && rand > 0.66){
    second = "Amazing"
}
else {
    second = "Stupid"
}

// Third
if (rand > 0.33){
    third = "things"
}
else if (rand < 0.33 && rand > 0.66){
    third = "dog"
}
else {
    third = "man"
}

console.log(`${first} ${second} ${third}`)