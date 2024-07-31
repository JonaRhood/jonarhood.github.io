document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".hiddennav");
    let aside = document.querySelector(".hiddennavpage");
    let linksHidden = document.querySelectorAll(".links-hiddennavpage");

    button.addEventListener("click", (event) => {

        let visible = document.querySelector(".hiddennavpage--visible");

        if (!visible) {
            setTimeout(() => {
                aside.classList.add("hiddennavpage--visible");
                button.innerHTML = '';
                button.innerHTML = '<i class="fa-solid fa-xmark i-hiddennav"></i>';
                button.style.color = 'black';
                button.style.position = 'fixed';
                document.querySelector('.i-hiddennav').style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            }, 100);

        } else {
            setTimeout(() => {
                aside.classList.remove("hiddennavpage--visible");
                button.innerHTML = '';
                button.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-bars logo-hiddennav i-hiddennav"></i>';
                button.style.color = 'white';
                button.style.position = '';
                document.querySelector('.i-hiddennav').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }, 100);
        }

    });

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
});