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
  let apikey = "03 c85048t924o90fc221bd5189a06dda ";
  let apiUrl = ` https: //api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&unit=metric`;

  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector(".form-input");
form.addEventListener("submit", search);
