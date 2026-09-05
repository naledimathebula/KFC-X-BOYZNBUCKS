/* =========================================
   KFC × BOYZNBUCK$

   PAGE 01 — COVER ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const brand = document.querySelector(".brand-label");
    const pageNumber = document.querySelector(".page-number");
    const brief = document.querySelector(".brief");
    const kfcTitle = document.querySelector(".kfc-title");
    const boyzTitle = document.querySelector(".boyz-title");
    const titleLine = document.querySelector(".title-line");
    const presented = document.querySelector(".presented");
    const theme = document.querySelector(".theme");
    const scrollIndicator = document.querySelector(".scroll-indicator");


    /* -----------------------------------------
       INITIAL STATES
    ----------------------------------------- */

    const elements = [
        brand,
        pageNumber,
        brief,
        kfcTitle,
        boyzTitle,
        titleLine,
        presented,
        theme,
        scrollIndicator
    ];


    elements.forEach((element) => {

        if (element) {
            element.style.opacity = "0";
        }

    });


    /* -----------------------------------------
       TOP BAR
    ----------------------------------------- */

    setTimeout(() => {

        if (brand) {
            brand.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            brand.style.opacity = "1";
            brand.style.transform = "translateY(0)";
        }

        if (pageNumber) {
            pageNumber.style.transition = "opacity 0.8s ease";
            pageNumber.style.opacity = "1";
        }

    }, 200);


    /* -----------------------------------------
       BRIEF
    ----------------------------------------- */

    setTimeout(() => {

        if (brief) {

            brief.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            brief.style.opacity = "1";
            brief.style.transform = "translateY(0)";
        }

    }, 500);


    /* -----------------------------------------
       KFC X
    ----------------------------------------- */

    setTimeout(() => {

        if (kfcTitle) {

            kfcTitle.style.transition =
                "opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)";

            kfcTitle.style.opacity = "1";
            kfcTitle.style.transform = "translateX(0)";
        }

    }, 800);


    /* -----------------------------------------
       BOYZNBUCK$
    ----------------------------------------- */

    setTimeout(() => {

        if (boyzTitle) {

            boyzTitle.style.transition =
                "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

            boyzTitle.style.opacity = "1";
            boyzTitle.style.transform = "translateX(0)";
        }

    }, 1000);


    /* -----------------------------------------
       RED LINE
    ----------------------------------------- */

    setTimeout(() => {

        if (titleLine) {

            titleLine.style.transition =
                "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

            titleLine.style.transform = "scaleX(1)";
            titleLine.style.opacity = "1";
        }

    }, 1400);


    /* -----------------------------------------
       BOTTOM INFORMATION
    ----------------------------------------- */

    setTimeout(() => {

        if (presented) {

            presented.style.transition =
                "opacity 1s ease, transform 1s ease";

            presented.style.opacity = "1";
            presented.style.transform = "translateY(0)";
        }


        if (theme) {

            theme.style.transition =
                "opacity 1s ease, transform 1s ease";

            theme.style.opacity = "1";
            theme.style.transform = "translateY(0)";
        }

    }, 1700);


    /* -----------------------------------------
       SCROLL INDICATOR
    ----------------------------------------- */

    setTimeout(() => {

        if (scrollIndicator) {

            scrollIndicator.style.transition =
                "opacity 1s ease";

            scrollIndicator.style.opacity = "1";
        }

    }, 2300);

}); 