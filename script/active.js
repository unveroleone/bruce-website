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
    console.log("🔍 Navigation Script Loaded!");

    const navLinks = document.querySelectorAll(".nav-link");
    let currentPage = window.location.pathname;

    console.log("📌 Aktuelle URL:", currentPage);

    // Falls GitHub Pages verwendet wird, Repository-Namen entfernen
    const repoName = "/bruce-website"; // Falls dein Repository anders heißt, anpassen
    if (currentPage.startsWith(repoName)) {
        currentPage = currentPage.replace(repoName, "");
        console.log("✂️ GitHub Pages Prefix entfernt:", currentPage);
    }

    // Falls die URL nur "/" ist (Startseite), als `index.html` setzen
    if (currentPage === "" || currentPage === "/") {
        currentPage = "/index.html";
    }

    // Falls die URL in einem Unterverzeichnis ist, entferne den letzten Slash
    if (currentPage.endsWith('/')) {
        currentPage = currentPage.slice(0, -1);
        console.log("✂️ Letzten Slash entfernt:", currentPage);
    }

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href");

        // Externe Links ignorieren
        if (linkPath.startsWith("http")) return;

        console.log("🔗 Link geprüft:", linkPath);

        // Falls `index.html` oder `/` verlinkt ist, gleiche es mit der Startseite ab
        if (linkPath === "index.html" || linkPath === "/") {
            linkPath = "/index.html";
        }

        // Falls die Seite ohne `.html` aufgerufen wurde, gleichsetzen
        if (currentPage.includes(linkPath)) {
            console.log("✅ Aktiver Link gefunden:", linkPath);
            link.classList.add("active");
        }
    });
});
