let button = document.querySelector('#btn');
let showBar = document.querySelector('.extendBar');

button.addEventListener('click',(e) =>{
    e.stopPropagation();
    showBar.classList.toggle('hide');
})