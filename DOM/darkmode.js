let container = document.querySelector(".container");
let button = document.querySelector("#mode");

button.addEventListener("click", ()=>{
    console.log('clicked');
    container.classList.toggle("bg-color");
    if(container.classList.toggle("bg-color" == true)){
        button.innerHTML = "Dark Mode";
        
    }
    else{
        button.innerHTML = "Light Mode";
    }
})