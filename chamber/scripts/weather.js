const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');
const windchill = document.querySelector('#windchill');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.25&lon=-111.64&units=imperial&appid=05d35910804aaa8c51aba7e709187c95';

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
    humidity.textContent = `${data.main.humidity}`;
    windSpeed.textContent = (data.wind.speed).toFixed(1);
    windchill.textContent = `${calculateWindchill(data)}`;
    const rise = new Date(data.sys.sunrise*1000);
    let riseMinutes;
    if (rise.getMinutes() < 10)
        {
            riseMinutes = `0${rise.getMinutes()}`;
        }
    const set = new Date(data.sys.sunset*1000);
    let setMinutes;
    if (set.getMinutes() < 10)
        {
            setMinutes = `0${set.getMinutes()}`;
        }
    else {
        setMinutes = `${set.getMinutes()}`;
    }
    sunrise.textContent = `${rise.getHours()}:${riseMinutes}`;
    sunset.textContent = `${(set.getHours()-12)}:${setMinutes}`;
}

function calculateWindchill(data) {
    if (Number(data.main.temp) <= 50 && Number(data.wind.speed) > 3.0) {
        let chill = 35.74 + (0.6215 * Number(data.main.temp)) - (35.75 * (Number(data.wind.speed) ** 0.16)) + (0.4275 * Number(data.main.temp) * (Number(data.wind.speed) ** 0.16));
        return chill.toFixed(0).toString() + "°F";
    }
    else {
        return "N/A";
    }
}