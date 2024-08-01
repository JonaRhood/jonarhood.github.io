document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".hiddennav");
    let buttonClose = document.querySelector(".x-hiddennav");
    let aside = document.querySelector(".hiddennavpage");
    let linksHidden = document.querySelectorAll(".links-hiddennavpage");


    //Show Hidden Menu
    const showHiddenMenu = () => {
        let visible = document.querySelector(".hiddennavpage--visible");

        if (!visible) {
            setTimeout(() => {
                aside.classList.add("hiddennavpage--visible");
            }, 100);
        } else {
            setTimeout(() => {
                aside.classList.remove("hiddennavpage--visible");
            }, 100);
        };
    };

    button.addEventListener("click", showHiddenMenu);
    buttonClose.addEventListener("click", showHiddenMenu);

    linksHidden.forEach(link => {
        link.addEventListener("click", showHiddenMenu);
    });


    // Resize close window
    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if (size >= 715) {
            aside.classList.remove("hiddennavpage--visible");
                button.innerHTML = '';
                button.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-bars logo-hiddennav i-hiddennav"></i>';
                button.style.color = 'white';
                button.style.position = '';
                document.querySelector('.i-hiddennav').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }

    });

});