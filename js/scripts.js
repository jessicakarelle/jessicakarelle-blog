// Sélectionne toutes les boxes à animer
const boxes = document.querySelectorAll(".box");
// Observer pour déclencher l'animation au scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.classList.contains("box")) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    },
    { threshold: 0.3 }
);

// Observe toutes les boxes
boxes.forEach((el) => observer.observe(el));
// Effet parallax et opacité sur la hero
const hero = document.querySelector(".hero-section .container");
window.addEventListener("scroll", () => {
    if (!hero) return;
    const scroll = window.scrollY;
    if (scroll < window.innerHeight) {
        hero.style.transform = `translateY(${scroll * 0.3}px)`;
        hero.style.opacity = 1 - scroll / 1000;
    }
});
