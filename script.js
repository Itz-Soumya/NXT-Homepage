const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
