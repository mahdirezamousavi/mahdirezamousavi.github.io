const today = document.getElementById('today');
if (today) today.textContent = new Intl.DateTimeFormat('fa-IR', {dateStyle:'full'}).format(new Date());
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.textContent = opened ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
  if (toggle) toggle.textContent = '☰';
}));
