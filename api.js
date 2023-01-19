const APIKEY =`0445b9406c70e023a6d3bfcc56f04aa5`;

async function getSeason(city){
    const weatherState = document.getElementById("weather")
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const data = await response.json()
    let weather;
    weather = data.weather[0].main;
    let colorPrimary = document.getElementsByClassName("color-Primary")
    let colorSecondary = document.getElementsByClassName("color-Secondary")
    weatherState.innerHTML =`<h2> Clima ${weather}</h2>`

    switch (weather) {
        case "Clear":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
           
            break;
        case "Rain":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#ebf2fa";
                colorPrimary[i].style.borderColor="#064789";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#427aa1"}
           
            break;
        case "Snow":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#dce0d9";
                colorPrimary[i].style.borderColor="#ead7c3";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#fbf6ef"}
            
            break;
        case "Clouds":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#c8d5b9";
                colorPrimary[i].style.borderColor="#faf3dd";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#8fc0a9"}
           
            break;
        case "Thunderstorm":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#4B4E6D";
                colorPrimary[i].style.borderColor="#222222";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#8EA8C3"}
               
        
            break;
        default:
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
            
            break;
    }
}
