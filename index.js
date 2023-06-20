// Fade in sections when scrolled into view
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const fadeIn = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeIn, {
        root: null,
        threshold: 0.3
    });

    sections.forEach(function(section) {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        sectionObserver.observe(section);
    });
});
