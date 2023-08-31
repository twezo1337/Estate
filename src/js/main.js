'use strict';

const headerMenu = document.querySelector('.header__menu'),
     burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', () => {
     burgerMenu.classList.toggle('active');
     headerMenu.classList.toggle('active');
});

headerMenu.addEventListener('click', (e) => {
     if (!headerMenu.contains(e.target)) {
          burgerMenu.classList.remove('active');
          headerMenu.classList.remove('active');
     }
});
window.addEventListener('click', e => {
     const target = e.target;
     if (!target.closest('.header__menu') && !target.closest('.burger')) {
          burgerMenu.classList.remove('active');
          headerMenu.classList.remove('active');
     }
});