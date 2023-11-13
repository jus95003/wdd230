const pwd1 = document.querySelector("#pwd1");

const pwd2 = document.querySelector("#pwd2");

const email = document.querySelector("#email");

const pattern = new RegExp('[a-zA-Z0-9._%+-]+@byui\.edu$');

const message = document.querySelector("#formMessage");

pwd2.addEventListener("focusout", checkSame);

email.addEventListener("focusout", checkValid);

function checkSame() {
	if (pwd1.value !== pwd2.value) {
		message.textContent = "❗PASSWORDS DO NOT MATCH!";
		message.style.visibility = "show";
        pwd1.style.backgroundColor = "#fff0f3";
		pwd2.style.backgroundColor = "#fff0f3";
		pwd1.value = "";
        pwd2.value = "";
		pwd1.focus();
	}
    
    else {
		message.style.display = "none";
		pwd2.style.backgroundColor = "#fff";
		pwd2.style.color = "#000";
	}
}

function checkValid() {
	if (!pattern.test(email.value)) {
		message.textContent = "❗EMAIL NOT VALID!";
		message.style.visibility = "show";
        email.style.backgroundColor = "#fff0f3";
		email.value = "";
		email.focus();
	}
    
    else {
		message.style.display = "none";
		email.style.backgroundColor = "#fff";
		email.style.color = "#000";
	}
}