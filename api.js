const APIKEY =`0445b9406c70e023a6d3bfcc56f04aa5`;

async function getSeason(city){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const data = await response.json()
    let weather;
    weather = data.weather[0].main;
    console.log(weather)
    let colorPrimary = document.getElementsByClassName("color-Primary")
    let colorSecondary = document.getElementsByClassName("color-Secondary")
    const weatherState = document.getElementById("weather")
    if (weatherState.length == 0){
    const content = document.createElement("h2");
    content.innerHTML =`${weather}`
    weatherState.append(content)}



    switch (weather) {
        case "Clear":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="dce0d9";
                colorPrimary[i].style.borderColor="ead7c3";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="fbf6ef"}
            
            break;
        case "Rain":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
           
            break;
        case "Snow":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
            
            break;
        case "Clouds":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
            break;
        case "Thunderstorm":
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
          
            break;
        default:
            for (var i = 0; i < colorPrimary.length; i++) {
                colorPrimary[i].style.backgroundColor="#CB793A";
                colorPrimary[i].style.borderColor="#55251D";}
            for (let j = 0; j < colorSecondary.length; j++){colorSecondary[j].style.backgroundColor="#96A13A"}
            
            break;
    }
}
