const weatherContainer = document.querySelector("#weatherContainer");

async function getData() {

    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const obj = await response.json();
    const {latitude, longitude, city, country} = obj; 
    console.log({latitude, longitude, city, country});
    
    const response_weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await response_weather.json();
    const { current_weather, current_weather_units } = weatherData;
    const { windspeed, winddirection, weathercode, temperature } = current_weather;
    const { windspeed_units, winddirection_units, temperature_units } = current_weather_units;
    const weatherDesc = descriptionWeather(weathercode);

    const itemWindCountry = document.createElement("p");
    itemWindCountry.innerHTML = `Country: <span class="text_responce">${country}</span>`;
    weatherContainer.append(itemWindCountry);
    const itemWindCity = document.createElement("p");
    itemWindCity.innerHTML = `City: <span class="text_responce">${city}</span>`;
    weatherContainer.append(itemWindCity);
    const itemTemperature = document.createElement("p");
    itemTemperature.innerHTML = `Temperature: <span class="text_responce">${temperature} ${current_weather_units.temperature}</span>`;
    weatherContainer.append(itemTemperature);
    const itemWindSpeed = document.createElement("p");
    itemWindSpeed.innerHTML = `Speed of wind: <span class="text_responce">${windspeed} ${current_weather_units.windspeed}</span>`;
    weatherContainer.append(itemWindSpeed);
    const itemWinddirection = document.createElement("p");
    itemWinddirection.innerHTML = `Direction of wind: <span class="text_responce">${winddirection} ${current_weather_units.winddirection}</span>`;
    weatherContainer.append(itemWinddirection);
    const itemWeathercode = document.createElement("p");
    itemWeathercode.innerHTML = `Description: <span class="text_responce">${weatherDesc}</span>`;
    weatherContainer.append(itemWeathercode);
  
}

function descriptionWeather(weatherсode) {
    switch (weatherсode) {
        case 0:
            return "Clear sky" 
            break;
        case 1:
            return "Mainly clear" 
            break;
        case 2:
            return "Partly cloudy" 
            break;
        case 3:
            return "Overcast" 
            break;            
        case 45:
            return "Fog" 
            break;
        case 48:  
            return "Depositing rime fog" 
            break;   
        case 51:
            return "Drizzle: light intensity" 
            break;  
        case 53:
            return "Drizzle: moderate intensity" 
            break;  
        case 55:
            return "Drizzle: dense intensity" 
            break;  
        case 56:
            return "Freezing Drizzle: light intensity" 
            break;
        case 57:
            return "Freezing Drizzle: dense intensity" 
            break;
        case 61:
            return "Rain: slight intensity" 
            break;
        case 63:
            return "Rain: moderate intensity" 
            break;
        case 65:
            return "Rain: heavy intensity" 
            break;
        case 66:
            return "Freezing Rain: light intensity" 
            break;
        case 67:
            return "Freezing Rain: heavy intensity" 
            break;
        case 71:
            return "Snow fall: slight intensity" 
            break;
        case 73:
            return "Snow fall: moderate intensity" 
            break;
        case 75:
            return "Snow fall: heavy intensity" 
            break;
        case 77:
            return "Snow grains" 
            break;  
        case 80:
            return "Rain showers: Slight, moderate, and violent" 
            break;  
        case 81:
            return "Rain showers: Slight, moderate, and violent" 
            break;  
        case 82:
            return "Rain showers: Slight, moderate, and violent" 
            break;  
        case 85:
            return "Snow showers slight" 
            break;  
        case 85:
            return "Snow showers heavy" 
            break;  
        case 95:
            return "Thunderstorm: Slight or moderate" 
            break;  
        case 96:
            return "Thunderstorm with slight hail" 
            break;                             
        case 99:
            return "Thunderstorm with heavy hail" 
            break;                             
        default:
            return "Other number";
    }
}


getData();




