document.addEventListener('DOMContentLoaded', () => {
  const fullDescription = document.querySelector('.fulldes');
  const shortDescription = document.querySelector('.shortdes');

  if (document.querySelector('.readmore')) {
    document.querySelector('.readmore').addEventListener('click', () => {
      if (fullDescription && shortDescription) {
        fullDescription.style.display = 'block';
        shortDescription.style.display = 'none';
      }
    });
  }

  if (document.querySelector('.readless')) {
    document.querySelector('.readless').addEventListener('click', () => {
      if (fullDescription && shortDescription) {
        fullDescription.style.display = 'none';
        shortDescription.style.display = 'block';
      }
    });
  }
});
