const botaoMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
})