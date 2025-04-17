// let age = 20;

// if(age <= 18){
//     console.log("You can't drive");
// }
// else{
//     console.log("You can drive");
// }

// //ternery opertor

// age>=18?console.log("You can drive"):console.log("You can't drive");



//   unit      |   Price 
//_____________|____________
// upto 100    |   4.2/unit
// 101-200     |  5.0/unit
// 201-300     | 6.7/unit
// 301+        | 7.8/unit

let quantity = Number(prompt("Enter the number of units"));
let charge = 0;
if (quantity <= 100){
    charge = 4.2;
}
else if (quantity >= 101 && quantity <= 200){
    charge = 5;
}
else if (quantity >= 201 && quantity <= 300){
    charge = 6.7;
}
else{
    charge = 7.8;
}
console.log(`The total price to pay is Rs.${Math.floor(charge * quantity)}`);
