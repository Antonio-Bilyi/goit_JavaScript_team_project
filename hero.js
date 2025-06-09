document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.cursor = 'pointer';
  });
});