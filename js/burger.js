'use strict';
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');

burger.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('header__nav--active')
    burger.classList.toggle('header__burger--active')
    })