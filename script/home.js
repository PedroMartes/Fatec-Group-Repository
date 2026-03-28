const sectionButtons = document.querySelectorAll('[data-target]');
const sections = {
  carro: document.getElementById('carro'),
  moto: document.getElementById('moto'),
  caminhonete: document.getElementById('caminhonete')
};

function getCurrentSection() {
  return Object.values(sections).find(section => section && section.classList.contains('active'));
}

function showSection(name) {
  const target = sections[name];
  if (!target) return;
  const current = getCurrentSection();
  if (current === target) return;

  if (current) {
    current.classList.remove('active');
    setTimeout(() => {
      current.classList.add('hidden');
      target.classList.remove('hidden');
      setTimeout(() => {
        target.classList.add('active');
      }, 10);
    }, 400);
  } else {
    target.classList.remove('hidden');
    target.classList.add('active');
  }
}

sectionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    showSection(target);
  });
});

// inicializar com carros visível (ou se quiser todos ocultos, comente a linha abaixo)
showSection('carro');
