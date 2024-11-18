let number = [1,2,3,4,5,6];
let result = number.map((a)=>{
    return a * 2;
})
console.log(result);

// chained function

let chained = number.map((a)=> a + 10).filter((a)=> a > 13);
console.log(chained);