// Slide-out contact panel toggling
(function(){
  const openBtn = document.getElementById('contact-open');
  const slide = document.getElementById('slide-contact');
  const closeBtn = document.getElementById('slide-close');

  if(!openBtn || !slide) return;
  function open(){
    slide.setAttribute('aria-hidden','false');
    openBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    slide.setAttribute('aria-hidden','true');
    openBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', open);
  if(closeBtn) closeBtn.addEventListener('click', close);
  slide.addEventListener('click', (e)=>{ if(e.target === slide) close(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
})();
