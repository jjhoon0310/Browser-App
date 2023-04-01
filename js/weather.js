const API_KEY = "c29612683aefb6366e4b656d367cfbc3";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.name;
            city.innerText = `${data.weather[0].main}, ${data.main.temp}`;
        });
}

function geoError() {
    alert("Can't find your location for weather.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
