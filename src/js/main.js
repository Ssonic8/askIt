var menu = document.querySelector(".main-nav__wrapper");
var button = document.querySelector(".main-nav__toggle");

button.addEventListener("click", function(evt){
	evt.preventDefault();
	menu.classList.toggle('visually-hidden');
	button.classList.toggle('main-nav__toggle--active');
});