let d = new Date().getDay();

const banner = document.getElementById("banner");
if (true) {
	banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
	banner.style.display = "none";
});

// d === 1 || d === 2 || d === 3