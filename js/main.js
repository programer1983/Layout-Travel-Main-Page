const nav = document.querySelector('.header__menu-list')
const headerBurger = document.querySelector('.header__burger')



headerBurger.addEventListener('click', openNav)

function openNav(){
    nav.classList.toggle('open-nav')
    headerBurger.classList.toggle('active')
}


/*==============================================================================*/

const swiper = new Swiper('.swiper', {
  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });