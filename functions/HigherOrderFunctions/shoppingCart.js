let cart = [
    {item:"laptop", quantity:1, price:100000,name:"azus"},
    {item:"laptop", quantity:1, price:120000,name:"msi"},
    {item:"laptop", quantity:2, price:130000,name:"dell"},
    {item:"laptop", quantity:4, price:140000,name:"acer"},
    {item:"laptop", quantity:5, price:150000,name:"rog"},
    {item:"laptop", quantity:7, price:160000,name:"hp"},
]
let option = "hp";

let filteredCart = cart.filter((product) => product.name === option).map((product) =>{
    return product.price * product.quantity;
})
console.log(filteredCart);
totolProduct = cart.reduce((accumulator, currentproduct) =>{
    return accumulator + (currentproduct.price * currentproduct.quantity);
},0)
console.log(totolProduct);