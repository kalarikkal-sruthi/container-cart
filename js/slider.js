
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
        root: null,
        threshold: 1.0, // Fully visible in the viewport
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const section = entry.target;

            if (entry.isIntersecting) {
                section.classList.remove("non-sticky");
            } else {
                section.classList.add("non-sticky");
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});
