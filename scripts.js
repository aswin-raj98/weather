let city = document.getElementById("city");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let searchBtn = document.getElementById("searchBtn");
// let pincode = document.getElementById("pincode");
// alert("Only Indian Pin code works");
searchBtn.addEventListener("click", function() {
    const APIKey = "c7bd6bfdb304be253f897cf3495c65a0";
    let cityname = document.getElementById("cityname").value;
    const weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=imperial`;

    fetch(weatherLink)
        .then(response => response.json())
        .then(data => {
            city.innerHTML = `City Name  : ${data.name}`;
            temp.innerHTML = `Temperature  : ${data.main.temp}°F`;
            weather.innerHTML = `Weather  : ${data.weather[0].main}`;
            setBackground(data.weather[0].main);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});

function setBackground(weatherCondition) {
    let body = document.body;
    
    switch (weatherCondition) {
        case 'Clear':
            body.style.backgroundImage = "url('sun.jpg')";
            
            break;
        case 'Clouds':
        case 'Haze':
        case 'Mist':
        case 'Fog' :
            body.style.backgroundImage = "url('cloudy.jpg')";
            break;
        case 'Rain':
        case 'Drizzle':
            body.style.backgroundImage = "url('rainy.jpg')";
            // document.getElementsByClassName("text").style.color=("Red")
            break;
        case 'Thunderstorm':
            body.style.backgroundImage = "url('thunderstorm.jpg')";
            break;
        case 'Snow':
            body.style.backgroundImage = "url('snow.jpg')";
            break;
        default:
            body.style.backgroundImage = "url('sky.jpg')";
            break;
    }
    
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
}
