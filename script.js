const API_key = `3592d8ee06e0a858803a334654d82d4d`;
const form = document.querySelector("form");
const search = document.querySelector("#city");
const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod == "404") {
        document.getElementById("citys").innerHTML = "City Not Found";
        return;
    } else if (city == "") {
        document.getElementById("citys").innerHTML = "Enter the City Name";
        return;
    }
    document.getElementById("citys").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + `<sup>°C</sup>`;
    document.getElementById("mitemp").innerHTML = data.main.temp_min + `<sup>°C</sup> / `;
    document.getElementById("mxtemp").innerHTML = data.main.temp_max + `<sup>°C</sup>`;
    document.getElementById("discription").innerHTML = data.weather[0].description;
    document.getElementById("discription").style.paddingBlock = "1rem";
    document.getElementById("wspeed").innerHTML = data.wind.speed + " km/h";
    document.getElementById("ap").innerHTML = data.main.pressure + " M/B";
    document.getElementById("h").innerHTML = data.main.humidity + " %";
    document.getElementById("lat").innerHTML ="Latitude " +data.coord.lat;
    document.getElementById("lon").innerHTML ="Longitude " +data.coord.lon;
    document.icon.style.display = "block";
    document.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("ic").style.display = "flex";
    document.getElementById("icc").style.display = "flex";
}
form.addEventListener("submit", (e) => {
    getWeather(search.value);
    e.preventDefault();
})