let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     if(!response.ok){
//         throw new Error("HTTP not found!");
//     }
//     return response.json();
// }).then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log(error);
// })


// using async function

async function getdata() {
    try {
        const response = await fetch(url);
        if (!response.ok)  {
            throw new Error("http not found!");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }    
}
getdata()