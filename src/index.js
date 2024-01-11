function displayWeather(response) {
  console.log(response.data);
  let apikey = "03 c85048t924o90fc221bd5189a06dda ";
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchform-input");
  let submitInput = document.querySelector("#submitform-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("#place");
  h1.innerHTML = searchInputValue;
}
let form = document.querySelector(".form-input");
form.addEventListener("submit", search);

let apiUrl = ` https: //api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;

axios.get(apiUrl).then(displayWeather);
