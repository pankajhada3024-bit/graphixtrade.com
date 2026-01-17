document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.getElementById("mobile-menu");
  const nav=document.getElementById("main-nav");
  if(!menu || !nav) return;

  menu.addEventListener("click",()=>{
    nav.classList.toggle("active");
    document.body.style.overflow=
      nav.classList.contains("active")?"hidden":"auto";
  });

  document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
      nav.classList.remove("active");
      document.body.style.overflow="auto";
    });
  });
});
