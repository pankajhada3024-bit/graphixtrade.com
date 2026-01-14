document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (!menuToggle || !navLinks) return;

  // Toggle menu
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close menu after clicking a link (mobile)
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

// Active link on scroll
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});
