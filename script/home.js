const sectionButtons = document.querySelectorAll('[data-target]');
const sections = {
  carro: document.getElementById('carro'),
  moto: document.getElementById('moto'),
  caminhonete: document.getElementById('caminhonete')
};

function showSection(name) {
  Object.values(sections).forEach(section => {
    if (section.id === name) {
      section.classList.remove('hidden');
      section.classList.add('active');
    } else {
      section.classList.add('hidden');
      section.classList.remove('active');
    }
  });
}

sectionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    showSection(target);
  });
});

// inicializar com carros visível
showSection('carro');
