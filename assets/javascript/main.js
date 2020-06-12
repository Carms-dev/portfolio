const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('#menu-list');
let menuOpen = false;

const openNav = () => {
    menuBtn.classList.add('open-menu');
    menuList.style.display = "flex";
    menuOpen = true;
}

const closeNav = () => {
    menuBtn.classList.remove('open-menu');
    menuList.style.display = "none";
    menuOpen = false;
}


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        openNav();

        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                closeNav();
            }
        })

        menuList.addEventListener('click', () => {
            closeNav();
        })
    } else {
        closeNav();
    }
})