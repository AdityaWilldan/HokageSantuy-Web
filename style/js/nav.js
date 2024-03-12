const toggleButton = document.querySelector('[data-collapse-toggle="navbar-solid-bg"]');
const mobileMenu = document.getElementById('navbar-solid-bg');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('block');
});