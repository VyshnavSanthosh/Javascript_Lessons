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

// let quantity = Number(prompt("Enter the number of units"));
// let charge = 0;
// if (quantity <= 100){
//     charge = 4.2;
// }
// else if (quantity >= 101 && quantity <= 200){
//     charge = 5;
// }
// else if (quantity >= 201 && quantity <= 300){
//     charge = 6.7;
// }
// else{
//     charge = 7.8;
// }
// console.log(`The total price to pay is Rs.${Math.floor(charge * quantity)}`);


// atm machine

let amount =  Number(prompt("Enter the amount you want to withdraw"))
if(amount > 500){
    console.log(`No. of RS.500 notes is ${Math.floor(amount / 500 )}`);
    console.log(amount);
    amount %=  500;
    console.log(amount);
    
}
if(amount > 200){
    console.log(`No. of RS.200 notes is ${Math.floor(amount / 200 )}`);
    console.log(amount);
    amount %=  200;
    console.log(amount);
    
}
if(amount > 100){
    console.log(`No. of RS.100 notes is ${Math.floor(amount / 100 )}`);
    console.log(amount);
    amount %=  100;
    console.log(amount);
    
}
if(amount > 50){
    console.log(`No. of RS.50 notes is ${Math.floor(amount / 50 )}`);
    console.log(amount);
    amount %=  50;
    console.log(amount);
    
}
if(amount > 20){
    console.log(`No. of RS.20 notes is ${Math.floor(amount / 20 )}`);
    console.log(amount);
    amount %=  20;
    console.log(amount);
    
}
if(amount == 10){
    console.log(`No. of RS.10 notes is ${Math.floor(amount / 10 )}`);
    console.log(amount);
    amount %=  10;
    console.log(amount);
    
}
if(amount > 5){
    console.log(`No. of RS.5 notes is ${Math.floor(amount / 5 )}`);
    console.log(amount);
    amount %=  5;
    console.log(amount);
    
}
if(amount > 2){
    console.log(`No. of RS.2 coin is ${Math.floor(amount / 2 )}`);
    console.log(amount);
    amount %=  2;
    console.log(amount);
    
}
if(amount == 1){
    console.log(`No. of RS.1 coin is ${Math.floor(amount / 1 )}`);
    console.log(amount);
    amount %=  1;
    console.log(amount);
    
}