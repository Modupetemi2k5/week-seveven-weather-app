function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchform-input");
  let submitInput = document.querySelector("#submitform-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("#place");
  h1.innerHTML = searchInputValue;
}
let form = document.querySelector(".form-input");
console.log(form);
form.addEventListener("submit", search);

function displayWeather(response) {
  event.preventDefault();

  let apikey = "03 c85048t924o90fc221bd5189a06dda ";
}

let apiUrl =
  "https: //api.shecodes.io/weather/v1/current?query={query}&key={key}";
axios.get(apiUrl).then(displayWeather);
