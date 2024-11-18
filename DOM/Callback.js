// calling another function inside another function

function prints(sumresult) {
    document.getElementById("red").innerHTML = sumresult;
}
function sumval(a,b) {
    let sum = a+b;
    prints(sum);
}

sumval(5, 10);

// passing a function as an argument

function one(printTwo) {
    console.log('printing two');
    printTwo();
}

function two() {
    console.log('two');
}
one(two);