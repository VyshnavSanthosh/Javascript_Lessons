let arr = [1,2,3,4,5,6,7,8,9,10];

// forEach loop

arr.forEach((value,index,arr) => {
    console.log(value,index,arr);
})

// for of loop

for (const element of arr) {

    console.log(element + 2);
}

// pop

arr.pop();
console.log(arr);

// push

arr.push(11);
console.log(arr);

// shift

arr.shift();
console.log(arr);

// unshift

arr.unshift(0);
console.log(arr);

// splice

arr.splice(0, 3);
console.log(arr);

// reverse

arr.reverse();
console.log(arr);

// map

let newarr = arr.map((value,arr,index) => {
    return value * 2;
})
console.log(newarr);

// filter

const greaterThan12 = (e) =>{             // here e is value
    if(e > 12) return true;
    else return false;
}
console.log(newarr.filter(greaterThan12))   

// reduce

const add = (a,b) =>{ 
             // here a and b are two adjacent values of the array      
    return a + b;
}
console.log(newarr.reduce(add))

// Array From

console.log(Array.from("hello world"))
// converts anything to an array
