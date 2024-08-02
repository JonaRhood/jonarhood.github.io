document.addEventListener("DOMContentLoaded", (event) => {

    const stickyNav = document.querySelector(".nav-bar-hidden-sticky");
    const upButton = document.querySelector(".goup-switcher");

    const appearElements = () => {
        let scroll = window.scrollY;
        let size = parseInt(document.body.clientWidth);
        
        if (scroll >= 210) {
            stickyNav.classList.add("sticky-navbar");
            upButton.classList.add("appear-goup-button");
        } else {
            stickyNav.classList.remove("sticky-navbar");
            upButton.classList.remove("appear-goup-button");
        };

        if (size < 715) {
            stickyNav.classList.remove("sticky-navbar");
        }
    };

    window.addEventListener("scroll", appearElements);

    window.addEventListener("resize", appearElements);

});