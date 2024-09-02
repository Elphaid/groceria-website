// Toggle 'active' class for search, cart, login, and navbar
function toggleActive(element, others) {
    element.classList.toggle('active');
    others.forEach(other => other.classList.remove('active'));
}

let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
searchBtn.onclick = () => toggleActive(searchForm, [shoppingCart, loginForm, navbar]);

let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn');
cartBtn.onclick = () => toggleActive(shoppingCart, [searchForm, loginForm, navbar]);

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');
loginBtn.onclick = () => toggleActive(loginForm, [searchForm, shoppingCart, navbar]);

let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () => toggleActive(navbar, [searchForm, shoppingCart, loginForm]);

window.onscroll = () => navbar.classList.remove('active');

var swiper = new Swiper(".product-slider", {
    loop: false,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: false,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
