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
