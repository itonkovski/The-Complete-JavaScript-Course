'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}m people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

///////////////////////////
//AJAX Call: XMLHttpRequest
/*
const getCountryAndNeighbour = function (country) {
  //AJAX Call for main country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render main country
    renderCountry(data);

    //Get neighbour country
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //AJAX Call for neighbour country
    const requestNeighbour = new XMLHttpRequest();
    requestNeighbour.open(
      'GET',
      `https://restcountries.com/v2/alpha/${neighbour}`
    );
    requestNeighbour.send();

    requestNeighbour.addEventListener('load', function () {
      const dataNeighbour = JSON.parse(this.responseText);
      renderCountry(dataNeighbour, 'neighbour');
    });
  });
};

getCountryAndNeighbour('Norway');
*/

///////////////////////////////////////
//Consuming Promises
//Chaining Promises
//Handling Rejected Promises
//Throwing Errors Manually

//Example
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//First Example
// const getCountryData = function (country) {
//   //Fetch main country
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       //Throwing Errors Manually
//       if (!response.ok)
//         throw new Error(`Country not found. (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       //Fetch neighbour
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.log(`${error}`);
//       renderError(`Something went wrong! ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//Throwing Errors Manually
const getCountryData = function (country) {
  //Fetch main country
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      //Fetch neighbour
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.log(`${error}`);
      renderError(`Something went wrong! ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData('Norway');

btn.addEventListener('click', function () {
  getCountryData('Norway');
});

// //Simulating an error with non existing country
// getCountryData('dddd');

//Simulating an error with no existing country
getCountryData('Australia');
