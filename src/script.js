const desktopNav = document.getElementById("desktopNav");
const mobileNav = document.getElementById("mobileNav");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;

  [desktopNav, mobileNav].forEach((nav) => {
    if (!nav) return;

    if (scrolled) {
      nav.classList.add(
        "bg-white/[0.04]",
        "backdrop-blur-lg",
        "shadow-[0_12px_40px_rgba(0,0,0,0.25)]",
      );
    } else {
      nav.classList.remove(
        "bg-white/[0.04]",
        "backdrop-blur-lg",
        "shadow-[0_12px_40px_rgba(0,0,0,0.25)]",
      );
    }
  });
});

function toggleMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

function removeMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  document.body.style.position = "";
  document.body.style.width = "";
}

// Scroll fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll("main h1, main h2, main p, main img, main button, main td, main th")
  .forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });
