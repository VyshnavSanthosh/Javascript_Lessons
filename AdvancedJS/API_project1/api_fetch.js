let container = document.querySelector(".container");
async function getweatherdata(location) {
    let response = await fetch(`https://api.weatherstack.com/current?access_key=b84a5a77eb8bf5b1edafa810a7bdbbbe&query=${location}`) // the fetch request takes time so use await 
    console.log(response);
    
    let data = await response.json();   // the response will be in JSON format which  we are converting to json object using .json() method
    console.log(data);
    try{
        console.log(`The humidity is ${data.current.humidity}`);
        console.log(`The temperature is ${data.current.temperature}`);
        console.log(`The climate is ${data.current.weather_descriptions[0]}`);
    
    
        container.innerText = `Humidity: ${data.current.humidity}%,Temperature: ${data.current.temperature}°C, Climate: ${data.current.weather_descriptions[0]}`; // inserting data into HTML
    }
    catch(error){
        console.log(error);
        container.innerText = "Invalid location";  // displaying error message if location is invalid
    }

    
}
let locations = prompt("Enter location");

getweatherdata(locations);