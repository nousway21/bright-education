/* =========================================
   BRIGHT EDUCATION
   INTERACTIONS & ANIMATIONS
========================================= */


/* =========================================
   THEME
========================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("bright-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeIcon.textContent = "☀";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    if (isLight) {

        themeIcon.textContent = "☀";

        localStorage.setItem(
            "bright-theme",
            "light"
        );

    } else {

        themeIcon.textContent = "☾";

        localStorage.setItem(
            "bright-theme",
            "dark"
        );

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* =========================================
   NAVBAR ON SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   CUSTOM CURSOR
=========================================

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


if (window.innerWidth > 700) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;

    });


    function animateCursor() {

        cursorX +=
            (mouseX - cursorX) * 0.15;

        cursorY +=
            (mouseY - cursorY) * 0.15;


        cursor.style.left =
            `${cursorX}px`;

        cursor.style.top =
            `${cursorY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const hoverElements =
        document.querySelectorAll(
            "a, button, .why-card, .direction-card, .teacher-card, .testimonial"
        );


    hoverElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.style.width = "55px";

                cursor.style.height = "55px";

                cursor.style.borderColor =
                    "rgba(139,92,246,.8)";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursor.style.width = "34px";

                cursor.style.height = "34px";

                cursor.style.borderColor =
                    "rgba(255,255,255,.5)";

            }
        );

    });

} */


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = [

    ".section-label",
    ".about-heading",
    ".about-bottom",
    ".why-card",
    ".directions-heading",
    ".direction-card",
    ".results-intro",
    ".result-item",
    ".philosophy-box",
    ".teacher-card",
    ".testimonial",
    ".process-card",
    ".faq-item",
    ".contact-box"

];


revealElements.forEach(selector => {

    document
        .querySelectorAll(selector)
        .forEach(element => {

            element.classList.add("reveal");

        });

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* =========================================
   STAGGER ANIMATION
========================================= */

document
    .querySelectorAll(".why-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });


document
    .querySelectorAll(".direction-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 60}ms`;

    });


document
    .querySelectorAll(".teacher-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });


document
    .querySelectorAll(".testimonial")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });


/* =========================================
   FAQ
========================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", () => {

        const wasActive =
            item.classList.contains("active");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

        });


        if (!wasActive) {

            item.classList.add("active");

        }

    });

});


/* =========================================
   NUMBER COUNTER
========================================= */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const element =
                    entry.target;

                const target =
                    Number(
                        element.dataset.count
                    );


                let current = 0;

                const duration = 1600;

                const increment =
                    target / (duration / 16);


                const updateCounter = () => {

                    current += increment;


                    if (current < target) {

                        element.textContent =
                            Math.floor(current) + "+";

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        element.textContent =
                            target + "+";

                    }

                };


                updateCounter();

                counterObserver.unobserve(
                    element
                );

            });

        },
        {
            threshold: 0.5
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================
   SMOOTH MAGNETIC BUTTON
========================================= */

const magneticButtons =
    document.querySelectorAll(
        ".primary-button, .contact-primary"
    );


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                button.getBoundingClientRect();


            const x =
                e.clientX - rect.left - rect.width / 2;

            const y =
                e.clientY - rect.top - rect.height / 2;


            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (
    heroVisual &&
    window.innerWidth > 900
) {

    document.addEventListener(
        "mousemove",
        (e) => {

            const x =
                (e.clientX / window.innerWidth - 0.5);

            const y =
                (e.clientY / window.innerHeight - 0.5);


            heroVisual.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        }
    );

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.style.color = "";

            const href =
                link.getAttribute("href");


            if (
                href === `#${current}`
            ) {

                link.style.color =
                    "var(--text)";

            }

        });

    }
);


/* =========================================
   PREVENT IMAGE DRAG
========================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "dragstart",
            e => e.preventDefault()
        );

    });


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);

/* =========================================
   CALL PANEL
========================================= */

const callButton = document.getElementById("callButton");
const callOverlay = document.getElementById("callOverlay");
const callClose = document.getElementById("callClose");

if (callButton && callOverlay && callClose) {

    callButton.addEventListener("click", () => {
        callOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    callClose.addEventListener("click", () => {
        callOverlay.classList.remove("active");
        document.body.style.overflow = "";
    });

    callOverlay.addEventListener("click", (e) => {
        if (e.target === callOverlay) {
            callOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

}