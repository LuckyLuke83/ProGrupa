'use strict'

const btnNav = document.querySelector('.nav-mobile-btn');
const navEl = document.querySelector('.nav');

btnNav.addEventListener('click', function () {
  navEl.classList.toggle('nav-open');
});