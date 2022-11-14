'use strict';

let menuButton = document.querySelector(".menu-button");
let barButton = document.querySelector(".third-button");
let xButton = document.querySelector(".x-button");
let navContents = document.querySelector(".nav-contents");
let mainContents = document.querySelector(".main");
let nav = document.querySelector(".nav");

let homeNav = document.querySelector(".home-link");
let aboutNav = document.querySelector(".about-link");
let worksNav = document.querySelector(".works-link");
let contactsNav = document.querySelector(".contacts-link");

let on_off = false;

function changeNav_to_Home(){
    navContents.classList.add("non-active");
    navContents.classList.remove("active");
    barButton.classList.remove("non-active");
    barButton.classList.add("active");
    xButton.classList.add("non-active");
    xButton.classList.remove("active");
    nav.classList.remove("is_open");
}

function changeHome_to_Nav(){
    navContents.classList.add("active");
    navContents.classList.remove("non-active");
    barButton.classList.add("non-active");
    barButton.classList.remove("active");
    xButton.classList.remove("non-active");
    xButton.classList.add("active");
    nav.classList.add("is_open");
}

menuButton.addEventListener("click", event => {
    if(on_off){
        changeNav_to_Home();
        on_off = false;
    }
    else{
        changeHome_to_Nav();
        on_off = true;
    }
});

homeNav.addEventListener("click", event => {
    changeNav_to_Home();
    on_off = false;
});

aboutNav.addEventListener("click", event => {
    changeNav_to_Home();
    on_off = false;
});

worksNav.addEventListener("click", event => {
    changeNav_to_Home();
    on_off = false;
})

contactsNav.addEventListener("click", event => {
    changeNav_to_Home();
    on_off = false;
})