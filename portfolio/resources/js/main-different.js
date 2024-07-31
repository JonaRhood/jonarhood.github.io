document.addEventListener("DOMContentLoaded", (event) => {

    let buttonPanel1 = document.querySelector("#bannerexp1");
    let buttonPanel2 = document.querySelector("#bannerexp2");
    let buttonPanel3 = document.querySelector("#bannerexp3");
    let buttonPanel4 = document.querySelector("#bannerexp4");
    let buttonPanel5 = document.querySelector("#bannerexp5");

    const hideRest = () => {
        buttonPanel1.classList.remove("experiencevisible");
        document.querySelector("#signbanner1").style.color = "white";
        document.querySelector("#signbanner1").innerHTML = "+";
        document.querySelector("#hiddenbanner1").classList.remove("experience-bannervisible");
        buttonPanel2.classList.remove("experiencevisible");
        document.querySelector("#signbanner2").style.color = "white";
        document.querySelector("#signbanner2").innerHTML = "+";
        document.querySelector("#hiddenbanner2").classList.remove("experience-bannervisible");
        buttonPanel3.classList.remove("experiencevisible");
        document.querySelector("#signbanner3").style.color = "white";
        document.querySelector("#signbanner3").innerHTML = "+";
        document.querySelector("#hiddenbanner3").classList.remove("experience-bannervisible");
        buttonPanel4.classList.remove("experiencevisible");
        document.querySelector("#signbanner4").style.color = "white";
        document.querySelector("#signbanner4").innerHTML = "+";
        document.querySelector("#hiddenbanner4").classList.remove("experience-bannervisible");
        buttonPanel5.classList.remove("experiencevisible");
        document.querySelector("#signbanner5").style.color = "white";
        document.querySelector("#signbanner5").innerHTML = "+";
        document.querySelector("#hiddenbanner5").classList.remove("experience-bannervisible");
    };

    buttonPanel1.addEventListener("click", (event) => {
        let visible = buttonPanel1.classList.contains("experiencevisible");

        if (!visible) {
            setTimeout(() => {
                hideRest();
            buttonPanel1.classList.add("experiencevisible");
            document.querySelector("#signbanner1").style.color = "#00efff";
            document.querySelector("#signbanner1").innerHTML = "-";
            document.querySelector("#hiddenbanner1").classList.add("experience-bannervisible");
            }, 150);
        } else {
            setTimeout(() => {
            buttonPanel1.classList.remove("experiencevisible");
            document.querySelector("#signbanner1").style.color = "white";
            document.querySelector("#signbanner1").innerHTML = "+";
            document.querySelector("#hiddenbanner1").classList.remove("experience-bannervisible");
        }, 150);
        }
    });

    buttonPanel2.addEventListener("click", (event) => {
        let visible = buttonPanel2.classList.contains("experiencevisible");

        if (!visible) {
            setTimeout(() => {
            hideRest();
            buttonPanel2.classList.add("experiencevisible");
            document.querySelector("#signbanner2").style.color = "#00efff";
            document.querySelector("#signbanner2").innerHTML = "-";
            document.querySelector("#hiddenbanner2").classList.add("experience-bannervisible");
        }, 150);
        } else {
            setTimeout(() => {
            buttonPanel2.classList.remove("experiencevisible");
            document.querySelector("#signbanner2").style.color = "white";
            document.querySelector("#signbanner2").innerHTML = "+";
            document.querySelector("#hiddenbanner2").classList.remove("experience-bannervisible");
        }, 150);
        }
    });

    buttonPanel3.addEventListener("click", (event) => {
        let visible = buttonPanel3.classList.contains("experiencevisible");

        if (!visible) {
            setTimeout(() => {
            hideRest();
            buttonPanel3.classList.add("experiencevisible");
            document.querySelector("#signbanner3").style.color = "#00efff";
            document.querySelector("#signbanner3").innerHTML = "-";
            document.querySelector("#hiddenbanner3").classList.add("experience-bannervisible");
        }, 150);
        } else {
            setTimeout(() => {
            buttonPanel3.classList.remove("experiencevisible");
            document.querySelector("#signbanner3").style.color = "white";
            document.querySelector("#signbanner3").innerHTML = "+";
            document.querySelector("#hiddenbanner3").classList.remove("experience-bannervisible");
        }, 150);
        }
    });

    buttonPanel4.addEventListener("click", (event) => {
        let visible = buttonPanel4.classList.contains("experiencevisible");

        if (!visible) {
            setTimeout(() => {
            hideRest();
            buttonPanel4.classList.add("experiencevisible");
            document.querySelector("#signbanner4").style.color = "#00efff";
            document.querySelector("#signbanner4").innerHTML = "-";
            document.querySelector("#hiddenbanner4").classList.add("experience-bannervisible");
        }, 150);
        } else {
            setTimeout(() => {
            buttonPanel4.classList.remove("experiencevisible");
            document.querySelector("#signbanner4").style.color = "white";
            document.querySelector("#signbanner4").innerHTML = "+";
            document.querySelector("#hiddenbanner4").classList.remove("experience-bannervisible");
        }, 150);
        }
    });

    buttonPanel5.addEventListener("click", (event) => {
        let visible = buttonPanel5.classList.contains("experiencevisible");

        if (!visible) {
            setTimeout(() => {
            hideRest();
            buttonPanel5.classList.add("experiencevisible");
            document.querySelector("#signbanner5").style.color = "#00efff";
            document.querySelector("#signbanner5").innerHTML = "-";
            document.querySelector("#hiddenbanner5").classList.add("experience-bannervisible");
        }, 150);
        } else {
            setTimeout(() => {
            buttonPanel5.classList.remove("experiencevisible");
            document.querySelector("#signbanner5").style.color = "white";
            document.querySelector("#signbanner5").innerHTML = "+";
            document.querySelector("#hiddenbanner5").classList.remove("experience-bannervisible");
        }, 150);
        }
    });

});
