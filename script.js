
  //darkmode

  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  const flashlightOverlay = document.getElementById('flashlight-overlay');
  
  // Enable dark mode and flashlight effect
  moonIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    localStorage.setItem('theme', 'dark'); // Save preference
  });
  
  // Disable dark mode and remove flashlight effect
  sunIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    localStorage.setItem('theme', 'light'); // Save preference
  });
  
  // Flashlight hover effect
  document.addEventListener('mousemove', (e) => {
    if (document.body.classList.contains('dark-mode')) {
      const x = e.clientX;
      const y = e.clientY;
      flashlightOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 100px, rgba(0,0,0,0.95) 200px)`;
    }
    else {
      flashlightOverlay.style.background = 'none'; // Reset overlay background
    }
  });
  
  // Maintain dark mode after page reload
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }
  if (localStorage.getItem('theme') === 'light') {
    flashlightOverlay.style.background = 'none';
  }
  

  //paging
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the clicked section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'flex';
            }
        });
    });
});