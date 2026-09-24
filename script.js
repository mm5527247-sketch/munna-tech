```javascript
/* ===============================
   DARK MODE
   =============================== */

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    }

});


/* ===============================
   REMEMBER THEME
   =============================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Light Mode";

}


/* ===============================
   CONTACT FORM
   =============================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "আপনার মেসেজ সফলভাবে পাঠানো হয়েছে! ✅\n\nধন্যবাদ Munna Tech-এর সাথে যোগাযোগ করার জন্য।"
        );

        contactForm.reset();

    });

}


/* ===============================
   CURRENT YEAR
   =============================== */

const yearElement = document.querySelector(".copyright p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Munna Tech. All Rights Reserved.`;

}
```
