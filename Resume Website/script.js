// Basic interactivity: menu toggle, smooth scroll, copy email, demo form
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');
  const themeToggle = document.getElementById('themeToggle');
  const copyEmail = document.getElementById('copyEmail');
  const copyEmailBottom = document.getElementById('copyEmailBottom');
  const sendMessage = document.getElementById('sendMessage');
  const clearForm = document.getElementById('clearForm');

  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const open = mainNav.classList.contains('open');
      menuToggle.textContent = open ? '✕' : '☰';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Theme toggle: simple invert (demo)
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('lightmode');
    if(document.documentElement.classList.contains('lightmode')){
      themeToggle.textContent='☀️';
    } else {
      themeToggle.textContent='🌙';
    }
  });

  // Copy email to clipboard
  function setupCopy(btn){
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const email = btn.textContent.trim();
      navigator.clipboard?.writeText(email).then(()=>{
        btn.textContent = 'Copied ✓';
        setTimeout(()=> btn.textContent = email, 1600);
      }).catch(()=> alert('Copy failed — please copy manually.'));
    });
  }
  setupCopy(copyEmail);
  setupCopy(copyEmailBottom);

  // Contact form demo
  if(sendMessage){
    sendMessage.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      if(!name || !email || !msg){ alert('Please fill all fields'); return; }
      // In production: send to server, Zapier, Formspree, etc.
      alert('Demo: Message ready to send. In production, configure a backend endpoint.');
      document.getElementById('contactForm').reset();
    });
  }
  if(clearForm){
    clearForm.addEventListener('click', ()=> document.getElementById('contactForm').reset());
  }
});
