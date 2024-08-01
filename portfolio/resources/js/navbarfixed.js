document.addEventListener("DOMContentLoaded", (event) => {

    const stickyNav = document.querySelector(".nav-bar-hidden-sticky");

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        
        if (scroll > 210) {
            stickyNav.classList.add("sticky-navbar");
        } else {
            stickyNav.classList.remove("sticky-navbar");
        }

    });
    
});