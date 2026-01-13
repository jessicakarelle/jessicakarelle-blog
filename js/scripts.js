// Sélectionne toutes les boxes à animer
const boxes = document.querySelectorAll(".box");
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

boxes.forEach((el) => observer.observe(el));
const hero = document.querySelector(".hero-section .container");
window.addEventListener("scroll", () => {
    if (!hero) return;
    const scroll = window.scrollY;
    if (scroll < window.innerHeight) {
        hero.style.transform = `translateY(${scroll * 0.3}px)`;
        hero.style.opacity = 1 - scroll / 1000;
    }
});

const categoryButtons = document.querySelectorAll(".category-btn");
const articles = document.querySelectorAll(".article-card");

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        articles.forEach((article) => {
            if (category === "all" || article.dataset.category === category) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});
