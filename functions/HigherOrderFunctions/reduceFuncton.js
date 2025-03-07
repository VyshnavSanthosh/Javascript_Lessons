let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = arr.reduce((accumulator,currentValue)=>{
    console.log(`accumulator: ${accumulator} currentValue: ${currentValue}`);
    return accumulator + currentValue;
},0)        // set accumulator to 0
            // 0+1
            // 1+2
            // 3+3
            // 6+4
            // 10+5
            // 15+6
            // 21+7
            // 28+8
            // 36+9
            // 45

console.log(sum); 