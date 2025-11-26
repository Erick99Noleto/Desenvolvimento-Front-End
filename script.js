// Smooth scroll via navbar
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Formulário com validação Bootstrap + LocalStorage
  const form = document.getElementById('form-contato');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
      localStorage.setItem('contato', JSON.stringify({ nome, email, mensagem }));
      alert('Mensagem enviada com sucesso!');
      form.reset();
      form.classList.remove('was-validated');
    }
  });
  
    const items = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    items.forEach(item => observer.observe(item));
  