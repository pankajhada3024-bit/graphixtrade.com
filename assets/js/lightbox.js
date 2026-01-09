// Minimal lightbox: opens image URL in modal, supports close on ESC/click
(function(){
  const lb = document.getElementById('lightbox');
  if(!lb) return;
  const lbImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  function open(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.style.display = 'flex';
    lb.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    lb.style.display = 'none';
    lbImg.src = '';
    lb.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // open from thumbnails with data-full attribute
  document.querySelectorAll('.thumb').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const src = btn.getAttribute('data-full');
      open(src, btn.querySelector('img')?.alt);
    });
  });

  if(closeBtn){
    closeBtn.addEventListener('click', close);
  }
  lb.addEventListener('click', (e)=>{
    if(e.target === lb) close();
  });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
})();
