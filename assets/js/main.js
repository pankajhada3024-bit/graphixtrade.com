document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("main-nav");
  const navItems = document.querySelectorAll(".nav-links a");

  // 1. Toggle Hamburger Menu
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    
    // Optional: Prevent body scroll when menu is open
    if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "initial";
    }
  });

  // 2. Close menu when any link is clicked
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = "initial";
    });
  });

  // 3. Active link highlighting on scroll
  const sections = document.querySelectorAll("section");
  
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active-link");
      if (link.getAttribute("href").includes(current) && current !== "") {
        link.classList.add("active-link");
      }
    });
  });
});
