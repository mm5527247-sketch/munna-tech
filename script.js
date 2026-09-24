document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("theme-toggle");

    // Dark Mode
    if (themeButton) {
        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeButton.textContent = "☀️ Light Mode";
            } else {
                themeButton.textContent = "🌙 Dark Mode";
            }

        });
    }

    // Contact Form
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("আপনার মেসেজ সফলভাবে পাঠানো হয়েছে! ✅");

            contactForm.reset();

        });
    }

});
