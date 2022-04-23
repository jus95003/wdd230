let d = new Date();
let year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastMod = new Date(document.lastModified);

document.getElementById("last-modified").textContent = lastMod;