// Joseph Ingham Dento-Legal Advisory - Main JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  const navLinkElements = document.querySelectorAll('.nav-link');
  navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinkElements.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Form validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // In production, this would send to a backend
      alert('Thank you for your enquiry. We will contact you within 24 hours.');
      contactForm.reset();
    });
  }

  // Email validation helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.card, .section').forEach(el => {
    observer.observe(el);
  });

  // Sticky navigation on scroll
  let lastScroll = 0;
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      nav.style.transform = 'translateY(0)';
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
});

// Copyright year updater
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
