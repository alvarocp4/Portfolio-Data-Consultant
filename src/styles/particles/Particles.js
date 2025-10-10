
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const mouse = { x: null, y: null, radius: 100 };
  window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y; });
  window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  let particles = [];
  const numParticles = 80;

  function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.3) * 0.2,
        dy: (Math.random() - 0.3) * 0.2,
        color: '#C07BFF'
      });
    }
  }

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < 150) {
          ctx.strokeStyle = `rgba(216,163,255,${0.3 * (1 - distance/150)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function updateParticles() {
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x - p.radius < 0) { p.x = p.radius; p.dx *= -0.3; }
      if (p.x + p.radius > canvas.width) { p.x = canvas.width - p.radius; p.dx *= -0.3; }
      if (p.y - p.radius < 0) { p.y = p.radius; p.dy *= -0.3; }
      if (p.y + p.radius > canvas.height) { p.y = canvas.height - p.radius; p.dy *= -0.3; }

      if (mouse.x && mouse.y) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.dx += Math.cos(angle) * force * 0.2;
          p.dy += Math.sin(angle) * force * 0.2;
        }
      }

      const maxSpeed = 0.3;
      p.dx = Math.max(Math.min(p.dx, maxSpeed), -maxSpeed);
      p.dy = Math.max(Math.min(p.dy, maxSpeed), -maxSpeed);
    });
  }

  function drawParticles() {
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles();
    connectParticles();
    updateParticles();
    requestAnimationFrame(animate);
  }

  canvas.addEventListener('click', e => {
    for (let i = 0; i < 4; i++) {
      particles.push({
        x: e.x,
        y: e.y,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        color: '#C07BFF'
      });
    }
  });

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  initParticles();
  animate();
});
