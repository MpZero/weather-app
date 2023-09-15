console.log("fetch");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const precip = document.querySelector("#precip");
const windSpeed = document.querySelector("#wind-speed");

const search = document.querySelector("#search").value;
const celsius = document.querySelector("#cel");
const faren = document.querySelector("#faren");
let unitSwitch = "enabled";

console.log(unitSwitch);

const btn = document.querySelector("#submitbtn");

btn.addEventListener("click", () => {
  const search = document.querySelector("#search").value;
  getData(search);
});

celsius.addEventListener("click", () => {
  const celSearch = document.querySelector("#search").value;
  unitSwitch = "enabled";
  getData(celSearch);
});

faren.addEventListener("click", () => {
  const farenSearch = document.querySelector("#search").value;
  unitSwitch = "disabled";
  getData(farenSearch);
});

async function getData(search) {
  console.log(unitSwitch + " inside getdata function");

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

    //3. put data on page
    h1.innerText = data.location.country;
    h2.innerText = data.location.name;
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
  humidity.innerText = " -- ";
  feelsLike.innerText = " -- ";
  windSpeed.innerText = " -- ";
  precip.innerText = " -- ";
}

function storeddata(newdata) {
  console.log(newdata + "hey");
}

//default search on page load
getData("buenos aires");
