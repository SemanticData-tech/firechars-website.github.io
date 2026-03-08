/* =============================================================
   fire.js — Hero Fire Particle Canvas Animation
   FireChars.in
   ============================================================= */

(function () {
  const canvas = document.getElementById('fireCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x       = W * 0.3 + Math.random() * W * 0.4;
      this.y       = H * 0.85 + Math.random() * H * 0.2;
      this.vx      = (Math.random() - 0.5) * 1.2;
      this.vy      = -(1.5 + Math.random() * 3.5);
      this.size    = 2 + Math.random() * 5;
      this.life    = 0;
      this.maxLife = 60 + Math.random() * 100;
      this.hue     = 15 + Math.random() * 30;
    }
    update() {
      this.life++;
      this.x    += this.vx + Math.sin(this.life * 0.05) * 0.4;
      this.y    += this.vy;
      this.vy   *= 0.99;
      this.size *= 0.994;
      if (this.life >= this.maxLife || this.size < 0.3) this.reset();
    }
    draw() {
      const t     = this.life / this.maxLife;
      const alpha = t < 0.3 ? t / 0.3 : (1 - t) * 1.2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 90%, ${30 + t * 40}%, ${Math.min(alpha, 0.85)})`;
      ctx.fill();
    }
  }

  // Seed particles at random life positions
  for (let i = 0; i < 180; i++) {
    const p = new Particle();
    p.life = Math.floor(Math.random() * p.maxLife);
    particles.push(p);
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();
