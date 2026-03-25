/* ============================
   PORTFOLIO JAVASCRIPT
   ============================ */

// ── Navbar scroll effect ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile hamburger menu ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// ── Typed text animation ──────────────────────────────────────────
const roles = [
  'Full-Stack Developer',
  'YouTuber',
  'Open Source Enthusiast',
  'UI/UX Designer',
  'Problem Solver',
];

let roleIndex  = 0;
let charIndex  = 0;
let isDeleting = false;
const typedEl  = document.getElementById('typed-text');

function type() {
  const current = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting  = false;
    roleIndex   = (roleIndex + 1) % roles.length;
    delay       = 400;
  }

  setTimeout(type, delay);
}

type();

// ── Particle background ───────────────────────────────────────────
(function spawnParticles() {
  const container = document.getElementById('particles');
  const count     = window.innerWidth < 600 ? 20 : 40;

  for (let i = 0; i < count; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    Object.assign(p.style, {
      width:              `${size}px`,
      height:             `${size}px`,
      left:               `${Math.random() * 100}%`,
      animationDuration:  `${Math.random() * 12 + 8}s`,
      animationDelay:     `-${Math.random() * 20}s`,
    });
    container.appendChild(p);
  }
}());

// ── Scroll reveal ─────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate skill bars when the card becomes visible
        const fill = entry.target.querySelector('.skill-fill');
        if (fill) {
          fill.style.width = `${fill.dataset.width}%`;
        }
        // Animate counters in about section
        const nums = entry.target.querySelectorAll('.stat-num');
        nums.forEach(animateCounter);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Counter animation ─────────────────────────────────────────────
function animateCounter(el) {
  if (el.dataset.animated) return;
  el.dataset.animated = 'true';
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const step     = target / (duration / 16);
  let   current  = 0;

  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current);
    if (current < target) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

// ── Contact form (demo) ───────────────────────────────────────────
const contactForm  = document.getElementById('contact-form');
const formStatus   = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn  = contactForm.querySelector('button[type="submit"]');
  btn.disabled  = true;
  const btnText = btn.querySelector('span');
  const btnIcon = btn.querySelector('i');
  btnText.textContent = 'Sending…';
  btnIcon.className   = 'fas fa-spinner fa-spin';

  // Simulate async submission
  setTimeout(() => {
    btn.disabled        = false;
    btnText.textContent = 'Send Message';
    btnIcon.className   = 'fas fa-paper-plane';
    formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
    formStatus.className   = 'form-status success';
    contactForm.reset();
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className   = 'form-status';
    }, 5000);
  }, 1800);
});

// ── Footer year ───────────────────────────────────────────────────
document.getElementById('footer-year').textContent = new Date().getFullYear();
