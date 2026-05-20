// Mobile menu
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  links.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * .12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animRing);
}
animRing();

// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 60);
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Filter
function filterPicks(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pick-item').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'grid' : 'none';
  });
}

// Hero title cycle — fade out, then fade next in
const heroCycles = document.querySelectorAll('.hero-cycle');
let heroIdx = 0;
setInterval(() => {
  heroCycles[heroIdx].classList.remove('active');
  setTimeout(() => {
    heroIdx = (heroIdx + 1) % heroCycles.length;
    heroCycles[heroIdx].classList.add('active');
  }, 800);
}, 5000);

// Newsletter
const newsletterSubmit = document.querySelector('.newsletter-submit');
if (newsletterSubmit) {
  newsletterSubmit.addEventListener('click', () => {
    const inp = document.querySelector('.newsletter-input');
    if (inp.value) {
      inp.value = '';
      inp.placeholder = 'You\'re in. ✦';
    }
  });
}
