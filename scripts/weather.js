const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.25&lon=111.64&units=imperial&appid=05d35910804aaa8c51aba7e709187c95';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

  function displayResults(data) {
    currentTemp = `${Math.round(parseFloat(data.main.temp))}°F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    desc = data.weather[0].description.replace(/\b[a-z]/g, match => match.toUpperCase());
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${currentTemp}\xa0\xa0\xa0-\xa0\xa0\xa0${desc}`;
  }