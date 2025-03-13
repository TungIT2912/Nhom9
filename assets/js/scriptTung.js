document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function animateSections() {
        let scrollPosition = window.scrollY + window.innerHeight / 1.3;
        sections.forEach((section) => {
            if (scrollPosition > section.offsetTop) {
                section.style.transform = "translateY(0)";
                section.style.opacity = "1";
            }
        });
    }

    window.addEventListener("scroll", animateSections);

    sections.forEach((section) => {
        section.style.transform = "translateY(30px)";
        section.style.opacity = "0";
        section.style.transition = "all 0.5s ease-in-out";
    });

    animateSections();
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
