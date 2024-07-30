document.addEventListener('DOMContentLoaded', () => {
  const fullDescription = document.querySelector('.fulldes');
  const shortDescription = document.querySelector('.shortdes');

  document.querySelectorAll('.readless,.readmore').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (fullDescription && shortDescription) {
        fullDescription.style.display = event.target.classList.contains('readless') ? 'none' : 'block';
        shortDescription.style.display = event.target.classList.contains('readmore') ? 'none' : 'block';
      }
    });
  });
});
