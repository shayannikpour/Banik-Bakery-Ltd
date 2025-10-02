// assets/js/main.js
// Mobile menu
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu){
  toggle.addEventListener('click', ()=> menu.classList.toggle('open'));
}

// Active link highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a=>{
  const href = a.getAttribute('href');
  if (href.endsWith(path)) a.classList.add('active');
});

// Simple contact form handler (no backend)
const form = document.querySelector('#contact-form');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // basic validation
    if(!data.name || !data.email || !data.message){
      alert('Please fill in your name, email, and message.');
      return;
    }
    // mailto fallback
    const subject = encodeURIComponent('Website Inquiry — Banik Bakery Ltd.');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ''}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:info@banikbakery.ca?subject=${subject}&body=${body}`;
  });
}
