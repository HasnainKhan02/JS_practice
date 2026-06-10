let ApiKey = "4ee82dbba4a566c41a95220c3b9ea1a2";
let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let searchBox = document.querySelector(".input input");
let searchBtn = document.querySelector(".icon");
let weatherIcon = document.querySelector(".IMG img");
// ------------------- API Function -------------------
async function GetAPiData(city) {
  if (!city) return; // prevent empty search
  try {
    const Data = await fetch(ApiUrl + city + `&units=metric&appid=${ApiKey}`);
    const response = await Data.json();

    if (response.cod === "404") {
      alert("City not found!");
      return;
    }

    document.querySelector(".city").innerHTML = response.name;
    document.querySelector(".unit").innerText =
      Math.round(response.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      response.main.humidity + "%";
    document.querySelector(".wind").innerHTML = response.wind.speed + " km/h";
    document.querySelector(".wthr").innerHTML = response.weather[0].main;

    if (response.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (response.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (response.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (response.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (response.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (response.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (response.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }

    // Greeting
    const hour = new Date().getHours();
    const greeting = document.querySelector(".morning");
    if (hour < 12) greeting.innerHTML = "GOOD MORNING";
    else if (hour < 18) greeting.innerHTML = "GOOD AFTERNOON";
    else greeting.innerHTML = "GOOD EVENING";
  } catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
}

// ------------------- Time & Day Function -------------------
function UpdateTime() {
  let now = new Date();

  // Day
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.querySelector("#day").innerHTML = days[now.getDay()];

  // Time
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // convert 0 → 12
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let timeString = `${hour}:${minutes} ${ampm}`;

  let TIME = document.querySelectorAll(".time"); /*.innerHTML = timeString;*/
  TIME.forEach((tme) => {
    tme.innerHTML = timeString;
  });
}

// Update immediately and every second
UpdateTime();
setInterval(UpdateTime, 1000);

// ------------------- Event Listener -------------------
searchBtn.addEventListener("click", () => {
  GetAPiData(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    GetAPiData(searchBox.value);
  }
});

// ------------------- Default City -------------------
GetAPiData("Swabi");
