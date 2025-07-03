
  fetch("testimonial.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("testimonial-section").innerHTML = data;

      // 🧠 Add slider logic *after* content is loaded
      let currentSlide = 0;
      const showSlide = (index) => {
        const testimonials = document.querySelectorAll('.testimonial');
        testimonials.forEach((el, i) => {
          el.classList.remove('active');
          if (i === index) el.classList.add('active');
        });
      };
      const changeSlide = (step) => {
        const testimonials = document.querySelectorAll('.testimonial');
        currentSlide += step;
        if (currentSlide < 0) currentSlide = testimonials.length - 1;
        if (currentSlide >= testimonials.length) currentSlide = 0;
        showSlide(currentSlide);
      };

      // Add click events to arrows
      document.querySelector('.arrow.left')?.addEventListener('click', () => changeSlide(-1));
      document.querySelector('.arrow.right')?.addEventListener('click', () => changeSlide(1));

      showSlide(currentSlide);
    });


  // Your toggleMenu stays the same
function toggleMenu() {
  const nav = document.querySelector('nav');
  const icon = document.querySelector('.hamburger i');

  nav.classList.toggle('show');

  if (nav.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}

// Make sure hamburger click always calls toggleMenu
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Optional: close nav when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('show');
    const icon = document.querySelector('.hamburger i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});



