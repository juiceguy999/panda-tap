document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('tap');
  const element = document.getElementById('animatedElement');

  const showElement = (x, y) => {
      element.style.left = `${x-40}px`;
      element.style.top = `${y-200}px`;
      element.style.display = 'block';
      setTimeout(() => {
          element.classList.add('animate');
      }, 10);

      setTimeout(() => {
          element.style.display = 'none';
          element.classList.remove('animate');
      }, 1000);
  };

  // Handle touch events for multi-finger clicks
  button.addEventListener('touchstart', (event) => {
      event.preventDefault();
      if (event.touches.length > 0) {
          const touch = event.touches[0];
          showElement(touch.clientX, touch.clientY);
      }
  });

  // Handle mouse clicks
  button.addEventListener('click', (event) => {
      showElement(event.clientX, event.clientY);
  });
});