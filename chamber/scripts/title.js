
const title = document.querySelector("#position");

const pattern = new RegExp('[a-zA-Z -]{7,}$');

const message = document.querySelector("#formMessage");

title.addEventListener("focusout", checkValid);

function checkValid() {
	if (!pattern.test(title.value)) {
		message.textContent = "❗TITLE NOT VALID!";
		message.style.visibility = "show";
        title.style.backgroundColor = "#fff0f3";
		title.value = "";
		title.focus();
	}
    
    else {
		message.style.display = "none";
		title.style.backgroundColor = "#fff";
		title.style.color = "#000";
	}
}

let dateInput = document.querySelector("#date");
  
let joinButton = document.querySelector(".submitBtn");
  
joinButton.addEventListener('click', () => {
  dateInput.value = Date.now();
});