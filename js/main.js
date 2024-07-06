const nav = document.querySelector('.header__menu-list')
const headerBurger = document.querySelector('.header__burger')
const html = document.querySelector('html')



headerBurger.addEventListener('click', openNav)

function openNav(){
    nav.classList.toggle('open-nav')
    headerBurger.classList.toggle('active')
    html.classList.toggle('html-static')
}


/*==============================================================================*/

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 1500,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /* =====================================================================================  */

  const detailsName1 = document.querySelector('.name-1')
  const detailsName2 = document.querySelector('.name-2')
  const detailsList1 = document.querySelector('.list-1')
  const detailsList2 = document.querySelector('.list-2')


  detailsName1.addEventListener("click", open)

  function open(){
    detailsList1.classList.toggle("active-menu")
  }

  detailsName2.addEventListener("click", open2)

  function open2(){
    detailsList2.classList.toggle("active-menu")
  }
  