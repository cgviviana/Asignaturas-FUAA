document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropbtn");
    dropdown.addEventListener("click", function () {
        const content = document.querySelector(".dropdown-content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
