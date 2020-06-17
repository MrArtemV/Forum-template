let burgerMenu = document.querySelector('.submenu');
let burgerToggler = document.querySelector('.user_menu');

burgerToggler.onclick = function() {
	burgerMenu.classList.toggle('activate');
	burgerToggler.classList.toggle('activate');
}