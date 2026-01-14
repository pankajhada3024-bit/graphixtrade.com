document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("main-nav");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Lock background scroll
    document.body.style.overflow =
      navLinks.classList.contains("active") ? "hidden" : "auto";
  });

  // Close menu when link clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
});
