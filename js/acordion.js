'use strict';
const accordionItems = document.querySelectorAll('.questions__item');
accordionItems.forEach(accordionItem =>{
    accordionItem.addEventListener('click', ()=>{
        accordionItem.classList.toggle('questions__item--expanded')
    })
})