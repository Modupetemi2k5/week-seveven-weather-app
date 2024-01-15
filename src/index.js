function displayWeather(response) {
  console.log(response.data);
  let tempElement = document.querySelector(".temp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"alt="weather Icon"class="cloud">`;
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(new Date(2024 - 1 - 15));
}

function formatDate(date) {
  let minute = date.getMinutes();
  let hour = date.getHours();
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  let day = days[date.getDay()];

  if (minute < 10) {
    minute = `0 ${minute}`;
  }

  return `${day}${hour}:${minute}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchform-input");
  let submitInput = document.querySelector("#submitform-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("#place");
  h1.innerHTML = searchInputValue;
  let apikey = "bd79ao40tde3dec118ca46bc3e6dd55f";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputValue}&key=${apikey}`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector(".form-input");
form.addEventListener("submit", search);
