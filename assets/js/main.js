document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle menu open/close
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Auto close menu when a link is clicked (mobile)
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});
// ===== ACTIVE NAV LINK ON SCROLL =====
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
