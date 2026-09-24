document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("theme-toggle");

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

    alert("JavaScript চলছে!");

});
