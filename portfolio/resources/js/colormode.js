document.addEventListener("DOMContentLoaded", (event) => {

    let switcher = document.querySelector(".color-switcher");

    switcher.addEventListener("click", () => {
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "resources/styles/dark.css"

        head.appendChild(link);

    });
});