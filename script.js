// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-links');
  
  if (toggle) {
    toggle.addEventListener('click', function() {
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#0e7490';
        nav.style.padding = '1rem';
        nav.style.gap = '1rem';
        nav.style.zIndex = '99';
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        if (nav.style.display === 'flex') {
          nav.style.display = 'none';
        }
      }
    });
  });

  // Subtle fade-in on scroll for cards (optional)
  const cards = document.querySelectorAll('.competency-card, .timeline-card, .project-card, .edu-card, .cert-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
  });
});