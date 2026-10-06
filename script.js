/* =========================================================
   APEX ENGINEERING CONSULTANT
========================================================= */


/* =========================================================
   HEADER
========================================================= */

const header =
    document.querySelector(".site-header");


function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");


function closeMobileMenu() {

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


function openMobileMenu() {

    mobileMenu.classList.add("active");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}


menuToggle.addEventListener(
    "click",
    () => {

        if (
            mobileMenu.classList.contains("active")
        ) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }
);



/* =========================================================
   MOBILE MENU LINKS
========================================================= */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("active")
        ) {

            closeMobileMenu();

        }

    }
);



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#" ||
                    targetId === ""
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header.offsetHeight;


                const targetPosition =
                    target.getBoundingClientRect().top
                    +
                    window.scrollY
                    -
                    headerHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });



/* =========================================================
   PROJECT INTERACTION
========================================================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach(project => {

    project.addEventListener(
        "mouseenter",
        () => {

            project.classList.add(
                "is-hovered"
            );

        }
    );


    project.addEventListener(
        "mouseleave",
        () => {

            project.classList.remove(
                "is-hovered"
            );

        }
    );

});



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".service, .project, .process-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});