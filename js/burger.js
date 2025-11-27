// ./js/burger.js
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const burgerMenu = document.getElementById('burgerMenu');
  const closeBurger = document.getElementById('closeBurger');
  const catalogBtn = document.querySelector('.header-catalog-button');

  if (!burgerBtn || !burgerMenu) return;

  function openBurger() {
    burgerMenu.classList.add('active');
    // prevent body scroll when menu open
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  function closeBurgerFn() {
    burgerMenu.classList.remove('active');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', () => {
    if (burgerMenu.classList.contains('active')) closeBurgerFn();
    else openBurger();
  });

  if (closeBurger) closeBurger.addEventListener('click', closeBurgerFn);

  // click on overlay (outside panel) closes
  burgerMenu.addEventListener('click', (e) => {
    if (e.target === burgerMenu) closeBurgerFn();
  });

  // If kataloq button clicked on small screens — open burger menu instead of modal
  if (catalogBtn) {
    catalogBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        openBurger();
        // optionally scroll to kataloq section inside burger if you render it there
        const kataloqAnchor = burgerMenu.querySelector('#katalog-section');
        if (kataloqAnchor) kataloqAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // desktop behavior (show modal) — if handlePopUp exists
        if (typeof handlePopUp === 'function') handlePopUp(true);
      }
    });
  }
});
// Burger menu açma
document.getElementById('burgerBtn').addEventListener('click', function() {
    document.getElementById('burgerMenu').classList.remove('hidden');
});

// Burger menu bağlama
document.getElementById('closeBurger').addEventListener('click', function() {
    document.getElementById('burgerMenu').classList.add('hidden');
});

