let lastScrollTop = 0;
    const navbar = document.getElementById('mainNav');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide navbar
            navbar.style.top = '-70px'; // Adjust this value based on your navbar height
        } else {
            // Scrolling up - show navbar
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

// Add event listeners to nav items
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Hide all sections
      document.querySelectorAll('.section').forEach(section => {
          section.classList.remove('active');
      });

      // Show the selected section
      const target = this.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
  });
});

// Function to add animation class when section is in view
function checkAnimations() {
  const sections = document.querySelectorAll('.section-animation');
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('in-view');
    }
  });
}

// Trigger the function on scroll
window.addEventListener('scroll', checkAnimations);
