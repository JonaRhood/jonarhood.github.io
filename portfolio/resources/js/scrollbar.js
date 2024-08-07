document.addEventListener("DOMContentLoaded", (event) => {

    const downBtn = document.querySelector(".goup-switcher");

    const moveUpBtn = () => {
        const scrollY = parseInt(window.scrollY);
        const width = parseInt(document.body.clientWidth);
        const height = parseInt(document.body.clientHeight);
        console.log(scrollY, width, height);

        if (scrollY > 3000) {
            downBtn.style.transform = "translateY(-8rem)";
        } else if (scrollY > 2000 && width > 450 && width < 1000) {
            downBtn.style.transform = "translateY(-8rem)";
        } else if (scrollY > 2500 && width < 450) {
            downBtn.style.transform = "translateY(-8rem)";
        } else {
            downBtn.style.transform = "translateY(0rem)";
        }
    };

    window.addEventListener("scroll", moveUpBtn);
});