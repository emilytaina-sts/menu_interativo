const menuinterativo = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});

const form = document.getElementById('formContato');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  form.reset();
});
