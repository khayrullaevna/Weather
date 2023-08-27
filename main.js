const apiKey = "996149ae4c2d28d3e8eff10f12299f72";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const elCity = document.querySelector(".city");
const elTemp = document.querySelector(".temp");
const elHumidity = document.querySelector(".humidity");
const elWind = document.querySelector(".wind");
const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const weatherIcon = document.querySelector(".weather-icon")
const weather = document.querySelector(".weather")
const error = document.querySelector(".error")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";
    }else{
        var data = await response.json();
        elCity.innerHTML = data.name;
        elTemp.innerHTML = Math.round(data.main.temp) + "°C";
        elHumidity.innerHTML = data.main.humidity + "%";
        elWind.innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        weather.style.display = "block";
        error.style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchInput.value);
})