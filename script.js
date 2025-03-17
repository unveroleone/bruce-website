// Elemente auswählen
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

// Klick-Event für Hamburger-Button (Menü öffnen)
hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
});

// Klick-Event für Schließen-Button (Menü schließen)
closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
});

// Schließen des Menüs, wenn ein Link geklickt wird
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});
