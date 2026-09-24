/* =====================================================
   MUNNA TECH — PROFESSIONAL JAVASCRIPT
   ===================================================== */

const themeButton = document.getElementById("theme-toggle");


/* =====================================================
   DARK MODE
   ===================================================== */

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDarkMode =
            document.body.classList.contains("dark-mode");


        if (isDarkMode) {

            themeButton.textContent = "☀️ Light Mode";

            themeButton.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );

            themeButton.setAttribute(
                "title",
                "Light Mode চালু করুন"
            );

        } else {

            themeButton.textContent = "🌙 Dark Mode";

            themeButton.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );

            themeButton.setAttribute(
                "title",
                "Dark Mode চালু করুন"
            );

        }

    });

}


/* =====================================================
   CONTACT FORM — SMALL INTERACTION
   ===================================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const submitButton =
            contactForm.querySelector(
                'button[type="submit"]'
            );


        if (submitButton) {

            submitButton.textContent =
                "Sending...";

            submitButton.disabled = true;

        }

    });

}
