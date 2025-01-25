const headerMenutoggle = document.getElementById('header_menutoggle');
const header = document.getElementById('header');
const headerPrincipal = document.getElementById('header_principal');
const headerNav = document.getElementById('header_nav');

headerMenutoggle.addEventListener('click', () => {
    header.classList.toggle('widht');
    headerPrincipal.classList.toggle('display');
    headerNav.classList.toggle('open');
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
        header.classList.remove("widht"); 
        headerPrincipal.classList.remove("display"); 
        headerNav.classList.remove('open');
    };
});

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

const updateSlider = () => {
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
};

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

