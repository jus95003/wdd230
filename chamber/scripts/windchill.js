let temp = document.getElementById('current-temp');

let wind = document.getElementsById('current-wind');

let chill;

function calculateWindchill()
{
    chill = 35.74 + (0.6215 * temp) - (35.75 * (wind^0.16)) + (0.4275 * temp * (wind^0.16));
}

function displayTotal()
{
    if (temp <= 50 && wind > 3)
    {
        calculateWindchill();

        document.querySelector('#current-chill').textContent = chill;
    }

    else
    {
        document.querySelector('#current-chill').textContent = "NA";
    }
}