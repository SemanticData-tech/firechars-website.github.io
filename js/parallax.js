/* =============================================================
   parallax.js — Scroll Parallax Effects
   FireChars.in
   ============================================================= */

(function () {
  const heroContent = document.querySelector('.hero-content');
  const heroBg      = document.querySelector('.hero-bg');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (heroContent) heroContent.style.transform = `translateY(${sy * 0.25}px)`;
    if (heroBg)      heroBg.style.transform      = `translateY(${sy * 0.4}px)`;
  });
})();
