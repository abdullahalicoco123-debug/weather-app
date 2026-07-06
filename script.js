const cityInput = document.getElementById("search-box");
const searchButton = document.getElementById("search-btn");
const cityNameElement = document.getElementById("city-name");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchWeatherData();
    }
});

searchButton.addEventListener("click",fetchWeatherData);
async function fetchWeatherData() {
    const cityName = cityInput.value;
    cityInput.value = "";
    const apiKey = "855cf29df13fcb4afe4b05974c3e65ca";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

try {
    const response = await fetch(url)
     const data = await response.json()
    cityNameElement.innerText = data.name;
    temperatureElement.innerText = `${data.main.temp}°C`
    humidityElement.innerText = `Humidity: ${data.main.humidity}%`;

windSpeedElement.innerText = `Wind: ${data.wind.speed} m/s`;
    if(!response.ok) {
        throw new Error("City not Found!")
    }
    
} catch(error){
    console.log(error)
    alert("City not found.Please enter a valid city name.");
    
}
 
}