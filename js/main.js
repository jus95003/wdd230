let d = new Date();
let year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

let lastMod = new Date(document.lastModified);

let customLastMod = (lastMod.getMonth()+1) + "/" + lastMod.getDate() + "/" + lastMod.getFullYear() + " " + lastMod.getHours() + ":" + lastMod.getMinutes() + ":" + lastMod.getSeconds();

document.getElementById("last-modified").textContent = customLastMod;