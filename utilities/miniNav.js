//getting the hamburger button as well as the mini-navbar for a mobile device
const hamburger = document.querySelector(".button-mobile");
const miniNav = document.querySelector(".miniNav");
const navbar = document.querySelector(".nav")

//adding event listeners to toggle visibility
hamburger.addEventListener("click", function() {
    miniNav.classList.toggle('hidden');
    miniNav.classList.toggle('-translate-y-full');
    navbar.classList.toggle('shadow-lg')
});