document.addEventListener("DOMContentLoaded", function () {

    const visitsDisplay = document.querySelector(".visits");
    
    let lastVisitDate = Number(window.localStorage.getItem("lastVisitDate-ls")) || 0;

    let currentDate = Date.now();

    let numberOfDays = Math.floor((currentDate-lastVisitDate)/60000)

    if (lastVisitDate == 0) {
        visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }

    else if ((currentDate-lastVisitDate)<60000) {
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    }
    
    else {
        if (numberOfDays == 1) {
            visitsDisplay.textContent = `You last visited 1 day ago.`;
        }

        else {
            visitsDisplay.textContent = `You last visited ${numberOfDays} days ago.`;
        }
    }
    
    lastVisitDate = Date.now();
    
    localStorage.setItem("lastVisitDate-ls", lastVisitDate);
    
    });