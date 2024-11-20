function getdata(data1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", data1);
            resolve("sucessfully printed everything");
        },5000)
    })    
}

// // promise chaining
// getdata(100).then((result) => {
//     console.log(result);
//     getdata(200).then((result) => {
//         console.log(result);
//     getdata(300).then((result) => {
//         console.log(result);
//     })
//     })
// })

// promise chaining another way

getdata(100).then(()=>{
    return getdata(200);
})
.then(() => {
    return getdata(300);
})
.then((result)=>{
    console.log(result);
})


