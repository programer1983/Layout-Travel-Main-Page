const nav = document.querySelector('.header__menu-list')
const headerBurger = document.querySelector('.header__burger')



headerBurger.addEventListener('click', openNav)

function openNav(){
    nav.classList.toggle('open-nav')
    headerBurger.classList.toggle('active')
}