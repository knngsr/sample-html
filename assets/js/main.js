

const navBtn = document.querySelector('.js-nav-button');
const body = document.querySelector('body');
const navMenu = document.querySelector('.js-nav-menu');

navBtn.addEventListener('click', function (event) {

  event.preventDefault();

  navMenu.classList.toggle('is-active');
  navBtn.classList.toggle('is-active');
  body.classList.toggle('is-fixed');
});

