// open & close menu
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
            if (e.key === "Escape") closeNav();
        })
        menuList.addEventListener('click', () => {
            closeNav();
        })
    } else {
        closeNav();
    }
})

// nav style updates based on scrollY
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
const modalBtns = Array.from(document.querySelectorAll('.btn-demo'));
const overlays = Array.from(document.querySelectorAll('.overlay'));

const openModal = (i) => {
    overlays[i].classList.add('open-modal');

    // function to stop the video for when the modal is being closed. 
    const stopVideo = () => {
        const iframe = overlays[i].querySelector('iframe');
        if (iframe) {
            const iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
    };

    // listen to escape key
    window.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.key === "Escape") {
            // if there is a video, it will pasue the video, else it is an empty function
            stopVideo();
            overlays[i].classList.remove('open-modal');
        }
    })
    
    // listen to click on closeBtn
    const closeBtn = overlays[i].querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        stopVideo();
        overlays[i].classList.remove('open-modal');
    })
}

modalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        openModal(index);
    });
})
