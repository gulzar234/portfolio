// SWITCH BETWEEN PAGES

const buttons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll(".page");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const pageName = button.getAttribute("data-page");

        buttons.forEach(function(item) {
            item.classList.remove("active");
        });

        pages.forEach(function(page) {
            page.classList.remove("active");
        });

        button.classList.add("active");

        document.getElementById(pageName).classList.add("active");
    });
});


// FILTER PROJECTS

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(function(filter) {
    filter.addEventListener("click", function() {

        const category = filter.getAttribute("data-filter");

        filters.forEach(function(item) {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        projects.forEach(function(project) {

            const projectCategory =
                project.getAttribute("data-category");

            if (category === "all" || category === projectCategory) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }

        });
    });
});


// DARK MODE

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! The demo form is not connected to email yet.";

    contactForm.reset();

});
