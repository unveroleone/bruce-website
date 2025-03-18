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


const navLinks = document.querySelectorAll(".nav-link");

const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


// Flasher
function downloadFile(file) {
    const betaSelected = document.getElementById("beta").checked;
    
    const baseUrl = betaSelected 
        ? "https://github.com/pr3y/Bruce/raw/refs/heads/WebPage/BetaRelease/Bruce-" 
        : "https://github.com/pr3y/Bruce/raw/refs/heads/WebPage/LastRelease/Bruce-";
    
    const fileUrl = baseUrl + encodeURIComponent(file) + ".bin";
    
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = file;
    link.style.display = "none";
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
}
function toggleCategory(category, state) {
  const selectedList = document.getElementById(category);
  if(state==0) { selectedList.style.display = 'none'; }
  else  { selectedList.style.display = 'block'; }
  toggleDeviceCategory('none');
  const button = document.querySelector('esp-web-install-button');
  button.style.display = 'none';
}
  
function toggleDeviceCategory(category) {
    document.querySelectorAll('.device-list').forEach(function(list) {
        list.style.display = 'none';
    });

    if (category === 'none') {
        return;
    }

    const selectedList = document.querySelector('.' + category);
    selectedList.style.display = 'block';

    document.querySelectorAll('.device-button').forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById(category).classList.add('active');

    updateManifest();
}

  
function updateManifest() {
    const versionInput = document.querySelector('input[name="version"]:checked');
    const typeInput = document.querySelector('input[name="type"]:checked');
    const button = document.querySelector('esp-web-install-button');

    // 🛠 Falls keine Version oder kein Gerät ausgewählt ist, verstecke den Button
    if (!versionInput || !typeInput) {
        button.style.display = 'none';
        return;
    }

    const version = versionInput.value;
    const type = typeInput.value; 

   
    button.manifest = `https://bruce.computer/${version}Release/Bruce-${type}.json`;

    
    button.style.display = 'block';
    button.classList.add('active');
}

document.querySelectorAll('input[name="version"], input[name="type"]').forEach(radio =>
    radio.addEventListener("change", updateManifest)
);
updateManifest();
 
document.addEventListener("DOMContentLoaded", () => {
    const installButton = document.querySelector("esp-web-install-button");

    if (installButton) {
        setTimeout(() => {
            const shadowRoot = installButton.shadowRoot;
            if (shadowRoot) {
                const button = shadowRoot.querySelector("button");

                if (button) {
                    button.style.background = "#9B51E0";
                    button.style.color = "white";
                    button.style.fontWeight = "600";
                    button.style.padding = "12px 24px";
                    button.style.borderRadius = "8px";
                    button.style.border = "2px solid #9B51E0";
                    button.style.textDecoration = "none";
                    button.style.fontSize = "1rem";
                    button.style.transition = "all 0.3s ease-in-out";
                    button.style.cursor = "pointer";
                    button.style.boxShadow = "0px 0px 10px rgba(155, 81, 224, 0.5)";
                    
                    // Hover-Effekt
                    button.addEventListener("mouseenter", () => {
                        button.style.background = "#8033C7";
                        button.style.borderColor = "#8033C7";
                        button.style.transform = "scale(1.05)";
                        button.style.boxShadow = "0px 0px 15px rgba(155, 81, 224, 0.7)";
                    });

                    button.addEventListener("mouseleave", () => {
                        button.style.background = "#9B51E0";
                        button.style.borderColor = "#9B51E0";
                        button.style.transform = "scale(1)";
                        button.style.boxShadow = "0px 0px 10px rgba(155, 81, 224, 0.5)";
                    });
                }
            }
        }, 500);
    }
});
