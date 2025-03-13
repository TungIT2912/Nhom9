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

    // Hiệu ứng khi nhấp vào thành viên
    document.querySelectorAll(".member").forEach(member => {
        member.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1) rotate(2deg)";
            this.style.transition = "all 0.3s ease";
        });
        member.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1) rotate(0deg)";
        });
    });

    // Hiệu ứng gõ chữ động ở phần giới thiệu
    const introText = "Chúng tôi không chỉ viết code – chúng tôi lập trình ước mơ. \
        Mỗi dòng lệnh là một bước tiến về phía trước, mỗi thử thách là một cơ hội để bứt phá. \
        Chúng tôi không chờ đợi tương lai, chúng tôi kiến tạo nó. \
        Bởi vì công nghệ không chỉ là công cụ – nó là vũ khí giúp chúng tôi thay đổi thế giới!";

    const introElement = document.querySelector("#about p");
    let index = 0;

    function typeText() {
        if (index < introText.length) {
            introElement.textContent += introText.charAt(index);
            index++;
            setTimeout(typeText, 20);
        }
    }

    introElement.textContent = "";
    typeText();
});
