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

//////////////////////////////
//Sticky navigation

const headerSection = document.querySelector('.header');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');

    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-20px',
  }
);

obs.observe(headerSection);