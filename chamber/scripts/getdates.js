document.addEventListener("DOMContentLoaded", function () {
  
    let yearSpan = document.querySelector("#currentyear");
  
    let currentYear = new Date().getFullYear();
  
    yearSpan.textContent = currentYear;

    let lastMod = new Date(document.lastModified);
    
    let customLastMod =
      (lastMod.getMonth() + 1) +
      "/" +
      lastMod.getDate().toString().padStart(2, '0') +
      "/" +
      lastMod.getFullYear() +
      " @ " +
      lastMod.getHours().toString().padStart(2, '0') +
      ":" +
      lastMod.getMinutes().toString().padStart(2, '0') +
      ":" +
      lastMod.getSeconds().toString().padStart(2, '0');
  
    document.getElementById("last-modified").textContent = customLastMod;
    
    let yearSpan2 = document.querySelector("#currentyear2");
  
    let currentYear2 = new Date().getFullYear();
  
    yearSpan2.textContent = currentYear2;
    
    document.getElementById("last-modified2").textContent = customLastMod;
});