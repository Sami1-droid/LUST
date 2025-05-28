document.addEventListener('DOMContentLoaded', () => {

  // ===== CONTACT FORM VALIDATION =====
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name) {
        alert('Please enter your name.');
        form.name.focus();
        return;
      }

      if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        form.email.focus();
        return;
      }

      if (!message) {
        alert('Please enter your message.');
        form.message.focus();
        return;
      }

      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // ===== FOOTER COPYRIGHT YEAR =====
  const copyrightEl = document.querySelector('.copyright-text');
  if (copyrightEl) {
    const currentYear = new Date().getFullYear();
    copyrightEl.innerHTML = `&copy; ${currentYear} YourTravelBlog. All rights reserved.`;
  }

  // ===== NAVBAR TOGGLE (Optional) =====
  const navToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-collapse');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // ===== TRAVEL STORIES CAROUSEL =====
  const carousel = document.querySelector('.travel-carousel');
  if (carousel) {
    const stories = carousel.querySelectorAll('.story');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let currentIndex = 0;

    function showStory(index) {
      stories.forEach((story, i) => {
        story.style.display = i === index ? 'block' : 'none';
      });
    }

    showStory(currentIndex);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + stories.length) % stories.length;
        showStory(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % stories.length;
        showStory(currentIndex);
      });
    }
  }

});
