// Functie om de taalvoorkeur van de gebruiker op te slaan in een cookie
function setLanguage(language) {
	document.cookie = "language=" + language + "; path=/";
	updateContent();
}

document.getElementById("nl-link").addEventListener("click", function(event) {
    event.preventDefault();
    setLanguage("nl");
});

document.getElementById("en-link").addEventListener("click", function(event) {
    event.preventDefault();
    setLanguage("en");
});

// Functie om de juiste taalversie van de inhoud te tonen op basis van de opgeslagen taal in het cookie
function updateContent() {
	var language = getLanguageFromCookie();
	var elements = document.getElementsByClassName(language);
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
	var elements = document.getElementsByClassName(language === "nl" ? "en" : "nl");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
}

// Functie om de opgeslagen taal uit het cookie op te halen
function getLanguageFromCookie() {
	var cookies = document.cookie.split("; ");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].split("=");
		if (cookie[0] === "language") {
			return cookie[1];
		}
	}
	return "nl"; // Standaardtaal is Nederlands
}

// Roep de updateContent functie aan bij het laden van de pagina om de juiste taalversie van de inhoud te tonen
window.onload = function() {
	updateContent();
}


// Selecteer het formulier
const form = document.querySelector('#contact-form');

// Voeg een event listener toe voor het indienen van het formulier
form.addEventListener('submit', (e) => {
	e.preventDefault(); // Voorkom standaard gedrag van het formulier
		
// Valideer het formulier
if (validateForm()) {
// Verwerk het formulier
	processForm();
	}
});
		
// Valideer het formulier
function validateForm() {
	let isValid = true;
		
// Controleer of de naam is ingevuld
const name = document.querySelector('#name');
	if (!name.value.trim()) {
		isValid = false;
		name.classList.add('invalid');
	} else {
		name.classList.remove('invalid');
	}
		
// Controleer of de e-mail geldig is
const email = document.querySelector('#email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
		isValid = false;
		email.classList.add('invalid');
	} else {
		email.classList.remove('invalid');
	}
		
	return isValid;
}
		
// Verwerk het formulier
function processForm() {
// Hier kunt u de gegevens naar de server sturen of een ander gewenst gedrag uitvoeren.
	alert('Bedankt voor je aanmelding!\nThank you for your registration!');
}

// functie om naar de bovenkant van de pagina te scrollen
function scrollToTop() {
	window.scrollTo(0, 0);
}
  
// haal de knop op uit de HTML
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
// koppel de scrollToTop functie aan de knop
scrollToTopBtn.addEventListener("click", scrollToTop);