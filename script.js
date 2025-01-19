const headerMenutoggle = document.getElementById('header_menutoggle');
const header = document.getElementById('header');
const headerPrincipal = document.getElementById('header_principal');
const headerNav = document.getElementById('header_nav');


headerMenutoggle.addEventListener('click', () => {
    header.classList.toggle('maior');
    headerPrincipal.classList.toggle('flex');
    headerNav.classList.toggle('open');
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 620) {
        header.classList.remove("maior"); 
        headerPrincipal.classList.remove("flex"); 
        headerNav.classList.remove('open');
    };
});
