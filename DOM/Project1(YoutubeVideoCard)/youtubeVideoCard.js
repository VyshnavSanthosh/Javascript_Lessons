function createCard(title,chanelName,views,age,duration,thumbnail) {
    let viewNumber
    if (views > 1000000) {
        viewNumber = views / 1000000 + "m";
    } else if (views > 1000) {
        viewNumber = views / 1000 + "k";
    } else {
        viewNumber = views;
    }
    let html = ` <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="">
                <div class="duration">${duration} </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${chanelName} . ${viewNumber} . ${age} months ago</p>
            </div>
        </div>
        `;
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
        // Here, the existing HTML content of the selected element (the one with the class "container") is being concatenated with the variable html. This means that whatever HTML is currently inside the "container" element will remain, and the content of the variable html will be added to the end of it.


}
createCard("Introduction to backend","Code with harry",700,2,3.33,"https://i.ytimg.com/an_webp/UzYRQURh_pY/mqdefault_6s.webp?du=3000&sqp=CNrv17kG&rs=AOn4CLCvYcNjTVLY7KiqLVf4hFBZGwjPvQ")
createCard("Introducdsftion to backend","Code with harry",7000000,2,3.33,"https://i.ytimg.com/an_webp/UzYRQURh_pY/mqdefault_6s.webp?du=3000&sqp=CNrv17kG&rs=AOn4CLCvYcNjTVLY7KiqLVf4hFBZGwjPvQ")