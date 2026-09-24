const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#0b1120";
        themeButton.textContent = "☀️ Light Mode";
    } else {
        document.body.style.backgroundColor = "";
        themeButton.textContent = "🌙 Dark Mode";
    }
});
