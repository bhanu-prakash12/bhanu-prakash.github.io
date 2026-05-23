// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth-reveal sections as they scroll into view
const sections = document.querySelectorAll('.section');
if ('IntersectionObserver' in window) {
  // Reset initial state — let observer take over
  sections.forEach(s => {
    s.style.animation = 'none';
    s.style.opacity = '0';
    s.style.transform = 'translateY(24px)';
    s.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  sections.forEach(s => io.observe(s));
}
