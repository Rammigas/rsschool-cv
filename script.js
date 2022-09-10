const burgerButton = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const body = document.body
burgerButton.addEventListener('click', activeButton)

function activeButton() {
	burgerButton.classList.toggle('active')
	headerMenu.classList.toggle('active')
	body.classList.toggle('lock')
}
// scroll
const menuLinks = document.querySelectorAll('.header__link')
let arrLinks = Array.from(menuLinks)

arrLinks.forEach(menuLink => {
	menuLink.addEventListener('click', onMenuLinkClick)
})
function onMenuLinkClick(e) {
	const menuLink = e.target;
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto)
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		});
		e.preventDefault();
	}
	burgerButton.classList.remove('active')
	headerMenu.classList.remove('active')
	body.classList.remove('lock')
}
