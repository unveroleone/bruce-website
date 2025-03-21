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

    // Falls GitHub Pages verwendet wird, Repository-Namen entfernen
    const repoName = "/bruce-website"; // Falls dein Repository anders heißt, anpassen
    if (currentPage.startsWith(repoName)) {
        currentPage = currentPage.replace(repoName, "");
    }

    // Falls die URL in einem Unterverzeichnis ist, entferne den letzten Slash
    if (currentPage.endsWith('/')) {
        currentPage = currentPage.slice(0, -1);
    }

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href");

        // Falls der Link `index.html` ist oder `/`, setze ihn auf die Startseite
        if (linkPath === "index.html" || linkPath === "/") {
            linkPath = "";
        }

        // Falls die Seite ohne `.html` aufgerufen wurde (z. B. `/about` statt `/about.html`), gleiche beide ab
        if (currentPage.includes(linkPath) && linkPath !== "") {
            link.classList.add("active");
        }
    });
});


