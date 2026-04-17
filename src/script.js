const desktopNav = document.getElementById("desktopNav");
const mobileNav = document.getElementById("mobileNav");

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
