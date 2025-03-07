let box2 = document.querySelector("#blue");
let a = setInterval(() => {
    box1.style.backgroundColor ="purple";
}, 1000);

let b = setTimeout(() => {   // this only works singlle time
    box1.style.backgroundColor ="blue";
}, 2000);

