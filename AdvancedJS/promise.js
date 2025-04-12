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




const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject("p1 sucess")},2000)
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("p2 sucess")},6000)
})

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("p3 sucess")},4000)
})

// Promise API's

Promise.all([p1,p2,p3]).then(function (result){
    console.log(result);
})

Promise.allSettled([p1,p2,p3]).then(function (result){
    console.log(result);
})

Promise.race([p1,p2,p3]).then(function (result){
    console.log(result);
})

Promise.any([p1,p2,p3]).then(function (result){
    console.log(result);
})
.catch(function(error){
    console.error(error);
})