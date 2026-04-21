// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// REVEAL ANIMATION
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => observer.observe(el));

// parallax
const hero = document.querySelector('.hero');

function updateParallax() {
  const offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.4 + "px";
}

// CLAVE: ejecutar al cargar
updateParallax();

// scroll
window.addEventListener('scroll', updateParallax);

// ACTIVAR HERO INMEDIATO
window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach(el => {
    el.classList.add("active");
  });
});

// CTA final
const cta = document.querySelector('.sticky-cta');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    cta.style.opacity = "1";
    cta.style.pointerEvents = "auto";
  } else {
    cta.style.opacity = "0";
    cta.style.pointerEvents = "none";
  }
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hostname === window.location.hostname) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});