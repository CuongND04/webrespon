/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav__menu")
const navToggle = document.querySelector("#nav__toggle")
const navClose = document.querySelector("#nav__close")
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show__menu")
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show__menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")
const linkAction = () => {
    navMenu.classList.remove("show__menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== SWIPER SNEAKERS ===============*/
let swiperImages = new Swiper('.home__swiper', {

    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
let swiperTitles = new Swiper('.home__titles', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,
});

swiperImages.controller.control = swiperTitles
swiperTitles.controller.control = swiperImages
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.querySelector("#header")
    this.scrollY >= 50 ? header.classList.add("bg-header"):header.classList.remove("bg-header")
}
window.addEventListener("scroll",bgHeader)