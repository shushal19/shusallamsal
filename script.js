// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let anchorLink of anchorLinks) {
      anchorLink.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = anchorLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  