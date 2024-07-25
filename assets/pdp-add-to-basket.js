document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bundle-option').forEach((option) => {
    option.addEventListener('click', (event) => {
      option.classList.toggle('selected');
    });
  });
});
