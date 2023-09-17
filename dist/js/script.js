// hamburger
const hamburger = document.querySelector('#hamburger'); // untuk membuat navbar menjadi menu hamburger
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});

// navbar fixed 
window.onscroll = function() { 
    const header = document.querySelector('header'); // untuk fungsi navbar onscroll
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }

    else {
        header.classList.remove('navbar-fixed');
    }
};
