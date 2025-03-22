document.addEventListener("DOMContentLoaded", () => {
    const currentLangBtn = document.getElementById("current-lang");
    const dropdown = document.getElementById("lang-dropdown");

    const savedLang = localStorage.getItem("selectedLang") || "en";
    if (savedLang !== "en") loadLanguage(savedLang);
    setCurrentLang(savedLang);

    function setCurrentLang(lang) {
        const flag = getFlagForLang(lang);
        currentLangBtn.innerText = flag;
    }

    function getFlagForLang(lang) {
        switch (lang) {
            case "fr": return "🇫🇷";
            case "pt": return "🇵🇹";
            case "es": return "🇪🇸";
            case "it": return "🇮🇹";
            case "de": return "🇩🇪";
            default: return "🇬🇧";
        }
    }

    currentLangBtn.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".language-switcher")) {
            dropdown.style.display = "none";
        }
    });

    dropdown.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            localStorage.setItem("selectedLang", lang);
            setCurrentLang(lang);

            console.log("🔄 Sprache wechseln zu:", lang); // Debugging

            if (lang === "en") {
                location.reload(); // Falls Englisch -> HTML bleibt original
            } else {
                loadLanguage(lang);
            }

            dropdown.style.display = "none";
        });
    });

    function loadLanguage(lang) {
        console.log("🌍 Lade Sprache:", lang); // Debugging

        fetch(`translations/${lang}.json`)
            .then(res => {
                if (!res.ok) throw new Error(`❌ Übersetzungsdatei ${lang}.json nicht gefunden`);
                return res.json();
            })
            .then(data => {
                console.log("📄 JSON geladen:", data); // Debugging
                document.querySelectorAll("[data-i18n]").forEach(el => {
                    const key = el.getAttribute("data-i18n");
                    if (data[key]) {
                        el.innerHTML = data[key];
                    }
                });
            })
            .catch(err => console.error("🚨 Fehler beim Laden der Übersetzung:", err));
    }
});
