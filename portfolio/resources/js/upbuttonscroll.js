document.addEventListener("DOMContentLoaded", (event) => {

    const downBtn = document.querySelector(".goup-switcher");

    const moveUpBtn = () => {
        const scrollY = parseInt(window.scrollY);
        const scrollTotal = parseInt(document.body.scrollHeight);
        const width = parseInt(document.body.clientWidth);
        const height = parseInt(document.body.clientHeight);

        let calculateScroll = 0.75 * scrollTotal;
        console.log(scrollY, scrollTotal, calculateScroll);

        if (scrollY > calculateScroll) {
            downBtn.style.transform = "translateY(-8rem)";
        } else {
            downBtn.style.transform = "translateY(0)";
        }

    };

    window.addEventListener("scroll", moveUpBtn);
});