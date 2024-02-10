'use strict';

// variables for navbar menu

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search
const navbarForm= document.querySelector('.navbar-form');
const navbarFormCloseBtn= document.querySelector('.navbar-form-close');
const navbarSearchBtn= document.querySelector('.navbar-search-btn');

// navbar menu toggle fumction

function navIsActive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click',()=>{
    navIsActive();
});

// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', ()=>{
    searchBarIsActive();
});
navbarFormCloseBtn.addEventListener('click', ()=>{
    searchBarIsActive();
});