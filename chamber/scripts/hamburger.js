
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const iframe = document.querySelector('.home-area');

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.

hambutton.addEventListener('click', () => {
	navigation.classList.toggle('show');
    iframe.classList.toggle('show');
	hambutton.classList.toggle('show');
});