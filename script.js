// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when clicking navigation link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// CHANGE HEADER WHEN SCROLLING
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(5, 30, 20, 0.92)";

    } else {

        navbar.style.background =
            "rgba(10, 35, 28, 0.65)";

    }

});


// ================================
// SIMPLE SCROLL REVEAL
// ================================

const cards =
    document.querySelectorAll(
        ".intro-card, .info-box"
    );

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.2
        }

    );


cards.forEach(function (card) {

    card.classList.add("hidden");

    observer.observe(card);

});