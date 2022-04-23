let d = new Date();
let year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastMod = new Date(document.lastModified);

let customLastMod = lastMod.getMonth() + "/" + lastMod.getDay() + "/" + lastMod.getFullYear + " " + lastMod.getTime

document.getElementById("last-modified").textContent = customLastMod;