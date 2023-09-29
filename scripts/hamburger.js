// Store the selected elements that we are going to use.

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.nav-list')

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});