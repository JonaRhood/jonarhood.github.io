document.addEventListener("DOMContentLoaded", (event) => {

    const stickyNav = document.querySelector(".nav-bar-hidden-sticky");
    const upButton = document.querySelector(".goup-switcher");

    const appearElements = () => {
        let scroll = window.scrollY;
        
        if (scroll > 210) {
            stickyNav.classList.add("sticky-navbar");
            upButton.classList.add("appear-goup-button");
        } else {
            stickyNav.classList.remove("sticky-navbar");
            upButton.classList.remove("appear-goup-button");
        };
    };

    window.addEventListener("scroll", appearElements);

});