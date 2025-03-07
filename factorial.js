let a = 10;
let arr = []
for(i = 1; i <= a; i++){
    arr.push(i);
}

console.log(arr);

const result = (a,b) =>{
    return a * b;
}

console.log(arr.reduce(result))

// using recursion

function factorial(number){
    if(number === 0 || number === 1){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }

}

console.log(factorial(10)); 
console.log('hello world');
