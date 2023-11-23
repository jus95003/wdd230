let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2 || d === 3) {
	banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
	banner.style.display = "none";
});