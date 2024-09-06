const apikey = "64719c866598619da7cf97d14180b933";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather() {
    try{
        const city = document.querySelector('#cityName').value.toLowerCase();
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        const data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == "Clear"){  
            weatherIcon.src = "images/sunny.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }else if(data.weather[0].main == "Thunderstorm"){
            weatherIcon.src = "images/storm.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "images/haze.png";
        }else{
            weatherIcon.src = "images/weather.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    catch(error){
        console.log(error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}
searchBtn.addEventListener("click",checkWeather);
    