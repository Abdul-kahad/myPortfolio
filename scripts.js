// Typing animation
    const typingText = document.getElementById('typing-text');
    const roles = [
      'Full-Stack Developer',
      'Front-End Developer',
      'Back-End Developer',
      'React Developer',
      'Problem Solver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function typeRole() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end before deleting
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      setTimeout(typeRole, typingSpeed);
    }

    // Start typing animation after page loads
    setTimeout(typeRole, 1000);

    // Scroll reveal animation
    const elements = document.querySelectorAll(".scroll-reveal");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach(el => observer.observe(el));
  
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-icon');
    const sideNav = document.querySelector('.sideNav');
    const navLinks = document.querySelectorAll('.nav-item a');
  
    menuBtn.addEventListener('click', () => {
      sideNav.classList.toggle('showNav');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        sideNav.classList.remove('showNav');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        sideNav.classList.remove('showNav');
      }
    });

    // Form submission handler
    function handleSubmit(event) {
      event.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      event.target.reset();
    }

    // Smooth scroll for navigation links
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