document.addEventListener("DOMContentLoaded", (event) => {

    let switcher = document.querySelector(".color-switcher");

    switcher.addEventListener("click", () => {
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "resources/styles/dark.css"
        link.id = "colorful-theme"

        let themeColored = document.querySelector("#colorful-theme");

        if (themeColored) {
            head.removeChild(themeColored);
        } else {
            head.appendChild(link);
        }

    });

    
});