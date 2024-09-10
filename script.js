let lastScrollTop = 0;
  const navbar = document.getElementById("mainNav");

  window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      
      navbar.style.top = "-80px"; 
    } else {
      
      navbar.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
  });

  var preloaderTimeout = 2000;

    window.addEventListener('load', function () {
      setTimeout(function () {
        document.body.classList.add('loaded');
      }, preloaderTimeout);
    });