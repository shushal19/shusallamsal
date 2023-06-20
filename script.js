// Image glazing effect
window.addEventListener('scroll', () => {
    const image = document.querySelector('section img');
    const scrollPosition = window.scrollY;

    image.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
});
