// calling another function inside another function

// function prints(sumresult) {
//     document.getElementById("red").innerHTML = sumresult;
// }
// function sumval(a,b) {
//     let sum = a+b;
//     prints(sum);
// }

// sumval(5, 10);

// passing a function as an argument

function one(printTwo) {
    console.log('printing two');
    printTwo();
}

function two() {
    console.log('two');
}
one(two);  

function getdata(getdataid,nextdata) {
    setTimeout(() => {
        console.log("data",getdataid);
        if (nextdata){
            nextdata();
        }
    }, 2000);
}
// Callback hell
getdata(10, ()=>{
    getdata(120, ()=>{
        getdata(140, ()=>{
            getdata(160)
        });
    });
});