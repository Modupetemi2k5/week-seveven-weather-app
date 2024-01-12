function displayWeather(response) {
  console.log(response.data);
  let tempElement = document.querySelector(".temp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchform-input");
  let submitInput = document.querySelector("#submitform-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("#place");
  h1.innerHTML = searchInputValue;
  let apikey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiUrl = ` https: //api.shecodes.io/weather/v1/current?query=${searchInputValue}&key=${apikey}&unit=metric`;

  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector(".form-input");
form.addEventListener("submit", search);
