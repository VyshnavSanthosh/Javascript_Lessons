let button = document.querySelector('#btn');
let box1 = document.querySelector("#red");
let orgcolor = box1.style.backgroundColor;
button.addEventListener("click",() =>{
    e.stopPropagation(); // prevent event bubbling
    console.log("clicked");
    if (box1.style.backgroundColor === "pink"){
        box1.style.backgroundColor = orgcolor;
        box1.innerHTML = "box1";
    }
    else{
        box1.style.backgroundColor = "pink";
        box1.innerHTML = "I was clicked";     //  to change inner content
    }
})
button.addEventListener("keydown",(e) =>{
    console.log(e.key , e.keyCode);   // prints which key was pressed and its value
})
clo