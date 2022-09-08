const burgerButton = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const body = document.body
burgerButton.addEventListener('click', activeButton)

function activeButton() {
	burgerButton.classList.toggle('active')
	headerMenu.classList.toggle('active')
	body.classList.toggle('lock')
}

