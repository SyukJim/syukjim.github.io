document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.pin-dot');
    const unlockText = document.querySelector('.unlock-text');
    const pinContainer = document.querySelector('.pin-container');
    const content = document.querySelector('.content');
  
    let pin = '';
    const correctPin = '1234';
  
    // Show the PIN interface on page load
    pinContainer.classList.add('show');
  
    dots.forEach((dot, index) => {
      setTimeout(() => {
        pin += index + 1;
        dot.classList.add('active');
  
        if (index === dots.length - 1) {
          if (pin === correctPin) {
            dots.forEach((dot) => {
              dot.classList.add('completed');
            });
            unlockText.classList.add('show');
            setTimeout(() => {
              pinContainer.style.display = 'none';
              content.style.display = 'block'; // Show the content
            }, 1000);
          } else {
            dots.forEach((dot) => {
              dot.classList.add('error');
            });
            setTimeout(() => {
              dots.forEach((dot) => {
                dot.classList.remove('active', 'error');
              });
              pin = '';
            }, 1000);
          }
        }
      }, (index + 1) * 1000);
    });
  });
  