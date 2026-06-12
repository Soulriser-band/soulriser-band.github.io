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

// letras
const buttons = document.querySelectorAll('.lyrics-btn');
const songs = document.querySelectorAll('.lyrics-song');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    songs.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');

    const target = btn.getAttribute('data-song');
    document.getElementById(target).classList.add('active');

  });
});

// GALERIA MODAL

const galleryImages = document.querySelectorAll(
  ".gallery-item img, .member-grid img"
);

const galleryModal = document.getElementById("galleryModal");
const galleryModalImg = document.getElementById("galleryModalImg");



galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    galleryModal.classList.add("active");

    galleryModalImg.src = img.src;

  });

});

// cerrar

galleryModal.addEventListener("click", (e) => {

  if (e.target !== galleryModalImg) {
    galleryModal.classList.remove("active");
  }

});


//ANALYTICS
const analyticsLinks = {
    'instagram-link': 'click_instagram',
    'youtube-link': 'click_youtube',
    'spotify-link': 'click_spotify',
    'facebook-link': 'click_facebook',
    'tiktok-link': 'click_tiktok',
    'x-link': 'click_x',
    'email-link': 'click_email',
    'presskit-link': 'click_presskit',
    'email-link': 'click_email',
    'presskit-link': 'click_presskit',
    'developer': 'click_developer'
};

Object.entries(analyticsLinks).forEach(([id, eventName]) => {

    const element = document.getElementById(id);

    if (element) {

        element.addEventListener('click', () => {

            if (typeof gtag === 'function') {
                gtag('event', eventName, {
                  link_id: id,
                  page: window.location.pathname
              });
            }

        });

    }

});