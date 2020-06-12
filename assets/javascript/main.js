const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('#menu-list');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open-menu');
        menuList.style.display = "flex";
    } else {
        menuBtn.classList.remove('open-menu');
        menuList.style.display = "none";
    }
    menuOpen = !menuOpen;
})
