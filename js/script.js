'use strict'

/////////////////////////////
//Mobile navigation

const btnNav = document.querySelector('.nav-mobile-btn');
const navEl = document.querySelector('.nav');
const menuOpen = document.querySelector('.nav-mobile-open');
const menuClose = document.querySelector('.nav-mobile-close');

btnNav.addEventListener('click', function () {
  navEl.classList.toggle('nav-open');
  menuOpen.classList.toggle('.hidden');
  menuClose.classList.toggle('.hidden');

});

