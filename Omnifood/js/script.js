const btn = document.querySelector(".btn-mobile-nav");
const height = document
  .querySelector(".section-header")
  .getBoundingClientRect().height;
const header = document.querySelector(".header");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Sticky Navigation
const heroSection = document.querySelector(".section-hero");
const headerSection = document.querySelector(".section-header");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      headerSection.classList.add("sticky");
    } else {
      headerSection.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${height}px`,
  }
);

obs.observe(heroSection);

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
