document.addEventListener("DOMContentLoaded", function ()
{
    let temp = document.getElementById('current-temp').textContent;

    let wind = document.getElementById('current-wind').textContent;

    function calculateWindchill()
    {
        if (Number(temp) <= 50 && Number(wind) > 3.0)
        {
            let chill = 35.74 + (0.6215 * Number(temp)) - (35.75 * (Number(wind) ** 0.16)) + (0.4275 * Number(temp) * (Number(wind) ** 0.16));

            return chill.toFixed(0).toString() + "°F";
        }

        else
        {
            return "N/A";
        }
    }

    document.querySelector('#current-chill').textContent = calculateWindchill();
});