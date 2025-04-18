// while loop syntax

// start;
// while(end){
//     code
//     change;
// }

let a = 0
while (a <= 100) {
    console.log(a);
    a++;
}

// while loop is mainly used when we know where to stop but we don't know when will it happen 


// sum of digits

let value = Number(prompt("Enter a number")) ;
let sum = 0;
if (Number.isNaN(value)) {
    console.log('Enter a valid number');
} else if (value <= 0) {
    console.log('Enter a positive number');
} else {
    while(n > 0){
        rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10)
        // value = 145  
        //  rem = 145 % 10 = 5
        // sum = 5
        //  n = Math.floor(n / 10) = 145 / 10 = 14
    }
    console.log(`Sum of digits is ${sum}`);
}


// reverse a number

let value2 = Number(prompt("Enter a number")) ;
let rev = 0;
if (Number.isNaN(value)) {
    console.log('Enter a valid number');
} else if (value <= 0) {
    console.log('Enter a positive number');
} else {
    while(n > 0){
        rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10)
        // value2 = 145  
        //  rem = 145 % 10 = 5
        // rev = 0 * 10 + 5 = 5
        //  n = Math.floor(n / 10) = 145 / 10 = 14
    }
    console.log(`Sum of digits is ${sum}`);
}