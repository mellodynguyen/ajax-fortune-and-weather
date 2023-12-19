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

  const url = '/weather.json?${zipcode}';
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

    // weatherjson = request.json.get("#weather-form")

    .then((response) => response.json())
    .then((weatherJson) => {
      document.querySelector('#weather-info').innerHTML = `Weather at ${zipcode}: ${weather}`;
      //document.querySelector('#weather-info').innerHTML = `Weather at ${zipcode}: ${weather}`;
    })
    //`Weather at ${zipcode}: ${weather}`; <-- template to update #weather-info div
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
