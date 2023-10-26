const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

visitsDisplay.textContent = numVisits;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);