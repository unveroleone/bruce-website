const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    let currentPage = window.location.pathname;

    if (currentPage.endsWith('/')) {
        currentPage = currentPage.slice(0, -1);
    }

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href");

        if (linkPath === "index.html" || linkPath === "/") {
            linkPath = "";
        }

        if (currentPage.includes(linkPath) && linkPath !== "") {
            link.classList.add("active");
        }
    });
});

