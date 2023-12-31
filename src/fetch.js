const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const img = document.querySelector("#weather-img");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const precip = document.querySelector("#precip");
const windSpeed = document.querySelector("#wind-speed");

const search = document.querySelector("#search").value;
const celsiusBtn = document.querySelector("#cel");
const farenBtn = document.querySelector("#faren");
let unitSwitch = "enabled";

const btn = document.querySelector("#submitbtn");

btn.addEventListener("click", () => {
  const search = document.querySelector("#search").value;
  getData(search);
});

celsiusBtn.addEventListener("click", () => {
  const celSearch = document.querySelector("#search").value;
  unitSwitch = "enabled";
  getData(celSearch);
});

farenBtn.addEventListener("click", () => {
  const farenSearch = document.querySelector("#search").value;
  unitSwitch = "disabled";
  getData(farenSearch);
});

async function getData(search) {
  try {
    //1. get the api data
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=9696f995d0d0455391f184533230304&q=" +
        search,

      {
        mode: "cors",
      }
    );
    //2. process the data
    const data = await response.json();

    //3. display data on the page
    h1.innerText = data.location.country;
    h2.innerText = data.location.name;
    img.src = data.current.condition.icon;
    humidity.innerText = data.current.humidity + " %";

    if (unitSwitch === "enabled") {
      h3.innerText = data.current.temp_c + " ºC";
      feelsLike.innerText = data.current.feelslike_c + " ºC";
      windSpeed.innerText = data.current.gust_kph + " km/h";
      precip.innerText = data.current.precip_mm + " mm";
    } else {
      h3.innerText = data.current.temp_f + " ºF";
      feelsLike.innerText = data.current.feelslike_f + " ºF";
      windSpeed.innerText = data.current.gust_mph + " mph";
      precip.innerText = data.current.precip_in + " in";
    }
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  console.log(error);
  h1.innerText = "Input correct city or country name";
  h2.innerText = " -- ";
  h3.innerText = " -- ";
  img.src = "https://placehold.co/100x100";
  humidity.innerText = " -- ";
  feelsLike.innerText = " -- ";
  windSpeed.innerText = " -- ";
  precip.innerText = " -- ";
}

//default search on page load
getData("buenos aires");
