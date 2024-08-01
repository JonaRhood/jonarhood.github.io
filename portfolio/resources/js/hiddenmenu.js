document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".hiddennav");
    let buttonClose = document.querySelector(".x-hiddennav");
    let aside = document.querySelector(".hiddennavpage");
    let linksHidden = document.querySelectorAll(".links-hiddennavpage");

    button.addEventListener("click", (event) => {

        let visible = document.querySelector(".hiddennavpage--visible");

        if (!visible) {
            setTimeout(() => {
                aside.classList.add("hiddennavpage--visible");
            }, 100);

        } 
    });

    buttonClose.addEventListener("click", (event) => {

        let visible = document.querySelector(".hiddennavpage--visible");

        if (visible) {
            setTimeout(() => {
                aside.classList.remove("hiddennavpage--visible");
            }, 100);
        }

    })

    linksHidden.forEach(link => {
        link.addEventListener("click", (event) => {
            setTimeout(() => {
                aside.classList.remove("hiddennavpage--visible");
                button.innerHTML = '';
                button.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-bars logo-hiddennav i-hiddennav"></i>';
                button.style.color = 'white';
                button.style.position = '';
                document.querySelector('.i-hiddennav').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }, 100);
        });
    });

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