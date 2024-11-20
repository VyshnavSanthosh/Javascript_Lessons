let container = document.querySelector(".container");
let image = document.querySelector("#image");
let inputValue = document.querySelector("#inputdata")
async function fetchdata() {
    console.log("Fetching data...");
    try {
        let inputValueData = inputValue.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValueData}`);
        if (!response.ok)  {
            throw new Error("http not found!");
        }
        const data = await response.json();
        console.log(data);
        image.src = data.sprites.front_default;
        image.style.display = "block";
    } catch (error) {
        console.log(error);
    }    
}
