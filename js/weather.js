const API_KEY = // Your API Key
    function geoSuccess(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const weatherSection = document.querySelector("#weather");
                const weather = weatherSection.getElementsByTagName("span")[0];
                const city = weatherSection.getElementsByTagName("span")[1];
                const temp = weatherSection.getElementsByTagName("span")[2];
                weather.innerText = `🌏 ${data.name}\u00A0\u00A0\u00A0\u00A0`;
                city.innerText = `⛅️ ${data.weather[0].main}\u00A0\u00A0\u00A0\u00A0`;
                temp.innerText = `🌡️ ${data.main.temp}°C`;
            });
    };

function geoError() {
    alert("Can't find your location for weather.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
