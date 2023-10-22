document.addEventListener("DOMContentLoaded", function ()
{
    let temp = document.getElementById('current-temp');

    let wind = document.getElementsById('current-wind');

    function calculateWindchill()
    {
        if (temp <= 50 && wind > 3)
        {
            let chill = 35.74 + (0.6215 * temp) - (35.75 * (wind^0.16)) + (0.4275 * temp * (wind^0.16));

            return chill;
        }

        else
        {
            return "N/A";
        }
    }

    document.querySelector('#current-chill').textContent = calculateWindchill();
});