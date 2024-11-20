// function database(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data: ${data} inserted successfully`);
//             resolve("Data inserted successfully");
//         }, 2000);
//     })
// }
// async function getalldata() {
//     console.log("Getting data 1");
//     await database(120);
//     console.log("Getting data 2");
//     await database(130);
//     console.log("Getting data 3");
//     await database(140);
// }
// getalldata();

// ice cream shop

const iceCreamFlavors = {
    "flavours": ["chocolate", "orange", "mango", "strawberry",],
    "toppings": ["fruits", "Nuts", "Caramel", "Sprinkles", "Chocolate chips"]
}

function iceCreamShop(flavor, toppings) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(iceCreamFlavors.flavours.includes(flavor) && iceCreamFlavors.toppings.includes(toppings)){
                console.log(`Enjoy your ${flavor} ice cream with ${toppings}`);
                resolve("Ice cream order placed successfully");
            }
            else{
                console.log("flavor or topping not found");
                reject("Invalid flavor or topping");
            }
        },5000)
    })
}

async function order() {
    try{
        await iceCreamShop("chocolate", "fruits");
    }
    catch(error){
        console.log(error);
    }
    try{
        await iceCreamShop("jackfruit", "Nuts");
    }
    catch(error){
        console.log(error);
    }
    
}
order();