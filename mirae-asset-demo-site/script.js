
// Simple mobile nav toggle and smooth scroll
const toggleBtn = document.querySelector('[data-toggle="menu"]');
const menu = document.querySelector('.menu');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => menu.classList.toggle('open'));
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      menu?.classList.remove('open');
    }
  });
});
