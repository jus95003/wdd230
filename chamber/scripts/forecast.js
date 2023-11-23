const twentyFour = document.querySelector('#twenty-four');
const fortyEight = document.querySelector('#forty-eight');
const seventyTwo = document.querySelector('#seventy-two');
const ninetySix = document.querySelector('#ninety-six');
const oneTwenty = document.querySelector('#one-twenty');

const dayOne = document.querySelector('#dayOne');
const dayTwo = document.querySelector('#dayTwo');
const dayThree = document.querySelector('#dayThree');
const dayFour = document.querySelector('#dayFour');
const dayFive = document.querySelector('#dayFive');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.25&lon=-111.64&units=imperial&cnt=40&appid=05d35910804aaa8c51aba7e709187c95';

async function apiFetch() {
    try {
      const response = await fetch(forecastURL);
      if (response.ok) {
        const data = await response.json();
        getForecast(data);
        get5DaysNames();
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function getForecast(data) {

    twentyFour.textContent = `${Math.round(parseFloat(data.list[7].main.temp_max))}°F`;
    fortyEight.textContent = `${Math.round(parseFloat(data.list[15].main.temp_max))}°F`;
    seventyTwo.textContent = `${Math.round(parseFloat(data.list[23].main.temp_max))}°F`;
    ninetySix.textContent = `${Math.round(parseFloat(data.list[31].main.temp_max))}°F`;
    oneTwenty.textContent = `${Math.round(parseFloat(data.list[39].main.temp_max))}°F`;
}

function get5DaysNames() {

    const currentDate = new Date();

    if (currentDate.getDay() == 0) {
        dayOne.textContent = "Mon";
        dayTwo.textContent = "Tue";
        dayThree.textContent = "Wed";
        dayFour.textContent = "Thur";
        dayFive.textContent = "Fri";
    } else if (currentDate.getDay() == 1) {
        dayOne.textContent = "Tue";
        dayTwo.textContent = "Wed";
        dayThree.textContent = "Thur";
        dayFour.textContent = "Fri";
        dayFive.textContent = "Sat";
    } else if (currentDate.getDay() == 2) {
        dayOne.textContent = "Wed";
        dayTwo.textContent = "Thur";
        dayThree.textContent = "Fri";
        dayFour.textContent = "Sat";
        dayFive.textContent = "Sun";
    } else if (currentDate.getDay() == 3) {
        dayOne.textContent = "Thur";
        dayTwo.textContent = "Fri";
        dayThree.textContent = "Sat";
        dayFour.textContent = "Sun";
        dayFive.textContent = "Mon";
    } else if (currentDate.getDay() == 4) {
        dayOne.textContent = "Fri";
        dayTwo.textContent = "Sat";
        dayThree.textContent = "Sun";
        dayFour.textContent = "Mon";
        dayFive.textContent = "Tue";
    } else if (currentDate.getDay() == 5) {
        dayOne.textContent = "Sat";
        dayTwo.textContent = "Sun";
        dayThree.textContent = "Mon";
        dayFour.textContent = "Tue";
        dayFive.textContent = "Wed";
    } else {
        dayOne.textContent = "Sun";
        dayTwo.textContent = "Mon";
        dayThree.textContent = "Tue";
        dayFour.textContent = "Wed";
        dayFive.textContent = "Thur";
    }
}