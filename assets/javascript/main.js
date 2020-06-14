// navigation

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
            if (e.keyCode === 27) closeNav();
        })
        menuList.addEventListener('click', () => {
            closeNav();
        })
    } else {
        closeNav();
    }
})

// nav display
const nav = document.querySelector('nav');
const header = document.querySelector('header');

let headerEnd = header.offsetTop + header.offsetHeight;

function updateNav() {
    if (window.scrollY >= headerEnd) {
        nav.style.background = "rgba(0, 0, 0, 0.2)";
    } else {
        nav.style.background = "transparent";
    }
}

window.addEventListener('scroll', updateNav);

// open modal
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.btn-demo');

openBtn.addEventListener('click', () => {
    overlay.classList.add('open-modal')

    const video = overlay.querySelector('iframe');
    const pauseVideo = () => {
        if (video) {
            const iframeSrc = video.src;
            video.src = iframeSrc;
        }
    }
    
    const closeBtn = overlay.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        pauseVideo();
        overlay.classList.remove('open-modal');
    })
    
    window.addEventListener('keydown', (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 27) {
            pauseVideo();
            overlay.classList.remove('open-modal');
        }
    })
})


