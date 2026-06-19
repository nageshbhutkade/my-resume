/* ===========================
   Resume Website - JavaScript
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ===========================
  // Theme Toggle
  // ===========================
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  const darkTheme = 'dark-theme';
  const savedTheme = localStorage.getItem('theme');

  // Apply saved theme
  if (savedTheme === 'dark') {
    document.body.classList.add(darkTheme);
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    const isDark = document.body.classList.contains(darkTheme);
    icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // ===========================
  // Mobile Nav
  // ===========================
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  function toggleMenu() {
    navMenu.classList.toggle('show-menu');
  }

  function closeMenu() {
    navMenu.classList.remove('show-menu');
  }

  navToggle.addEventListener('click', toggleMenu);
  navClose.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  // ===========================
  // Active Link on Scroll
  // ===========================
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      const link = document.querySelector(`.nav__link[href*="#${sectionId}"]`);
      if (link) {
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active-link');
        } else {
          link.classList.remove('active-link');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActive);

  // ===========================
  // Scroll Up Button
  // ===========================
  const scrollUp = document.getElementById('scroll-up');

  function handleScrollUp() {
    if (window.scrollY >= 400) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }

  window.addEventListener('scroll', handleScrollUp);

  scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===========================
  // Skill Bars Animation
  // ===========================
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skills__bar-fill');
    const triggerBottom = window.innerHeight * 0.85;

    skillBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      if (barTop < triggerBottom && bar.style.width === '0px' || !bar.style.width || bar.style.width === '0%') {
        bar.style.width = bar.dataset.width + '%';
      }
    });
  }

  window.addEventListener('scroll', animateSkillBars);
  // Initial check
  setTimeout(animateSkillBars, 300);

  // ===========================
  // Project Filter
  // ===========================
  const filters = document.querySelectorAll('.projects__filter');
  const projectCards = document.querySelectorAll('.projects__card');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Remove active class from all filters
      filters.forEach(f => f.classList.remove('active-filter'));
      filter.classList.add('active-filter');

      const filterValue = filter.dataset.filter;

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===========================
  // Smooth Reveal on Scroll
  // ===========================
  function revealOnScroll() {
    const elements = document.querySelectorAll(
      '.skills__card, .experience__card, .projects__card, .education__card, .about__content, .about__visual'
    );

    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state
  const revealElements = document.querySelectorAll(
    '.skills__card, .experience__card, .projects__card, .education__card, .about__content, .about__visual'
  );
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', revealOnScroll);
  setTimeout(revealOnScroll, 400);

  // ===========================
  // Header Shadow on Scroll
  // ===========================
  const header = document.getElementById('header');

  function headerShadow() {
    if (window.scrollY >= 50) {
      header.style.boxShadow = '0 2px 20px var(--shadow-color)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  window.addEventListener('scroll', headerShadow);

  // ===========================
  // Contact Form
  // ===========================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      // Re-enable after timeout (in case formspree takes time)
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Send Message';
        btn.disabled = false;
      }, 5000);
    });
  }
});
