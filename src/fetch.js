console.log("fetch");

//1. get the api data
async function getData() {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=9696f995d0d0455391f184533230304&q=buenos_aires",
      {
        mode: "cors",
      }
    );
    //2. process the data
    const data = await response.json();
    //3. return the data
    console.log(data);
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  console.log(error);
}

getData();
