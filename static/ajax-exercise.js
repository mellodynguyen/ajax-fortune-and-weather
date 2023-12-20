'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then((response) => response.text())
    .then((fortune) => {
      document.querySelector('#fortune-text').innerHTML = fortune;
    });
    // then shove it in #fortune-text div (id=fortune-text)
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  // localhost:5000/weatherform -> prevent normal reaction for form 

  const url = `/weather.json`;
  // JSON OBJECT: {temp: TEMP, forecast: FORECAST}
  // page looks like
  // {
//   "forecast": "Kind of boring.",
//   "temp": "68F"
// }


  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  // id="weather-form"
  //make a fetch request to the weather route
  // GET request 
  fetch(url)
    //see if the response exists
    //parse the json
    .then((response) => response.json())
    .then((weatherJson) => {
      // weatherjson.value
      // weatherjson[temp] weatherjson[forecast]
      document.querySelector('#weather-info').innerHTML = `The temp is ${weatherJson.temp}, ${weatherJson.forecast}`;
    }) // weatherJson.forecast
    // console.log(weatherJson)
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

  // route is /order-melons

  // the keys of the JSON that we're sending has to match the keys the server is looking for 
  // melon = request.json.get('melon_type')
  // qty = int(request.json.get('qty'))
  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  
  // use fetch() to make a request to that route
  // ('/api/order-melons)
  // boiler plate - need this everytime you make a request to frontend 
  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      //update that melon info in the html somehow?
      document.querySelector('#order-status').innerHTML = `you ordered something ${responseJson.code} ${responseJson.msg}`
    }); // <div><div>
        // <div>`you ordered something ${melon} ${quantity}` <>

  const errorContainer = document.querySelector('#order-status');
  errorContainer.classList.add('order-error')
    // something.classListadd(order-error)
  // take the returend reslt object and extract status code & message 
};
document.querySelector('#order-form').addEventListener('submit', orderMelons);
