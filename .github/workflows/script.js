document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const year = document.getElementById('year');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('open');
      });
    });
  }

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');

      formStatus.textContent = `Thanks ${name || 'there'}! Your message has been captured locally for now.`;
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
      }, 6000);
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

