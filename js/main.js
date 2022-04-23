document.addEventListener("DOMContentLoaded", function () {
  let yearSpan = document.querySelector("#currentyear");

  let currentYear = new Date().getFullYear();

  yearSpan.textContent = currentYear;

  let lastMod = new Date(document.lastModified);

  let customLastMod =
    (lastMod.getMonth() + 1) +
    "/" +
    lastMod.getDate() +
    "/" +
    lastMod.getFullYear() +
    " " +
    lastMod.getHours() +
    ":" +
    lastMod.getMinutes() +
    ":" +
    lastMod.getSeconds();

  document.getElementById("last-modified").textContent = customLastMod;
});
