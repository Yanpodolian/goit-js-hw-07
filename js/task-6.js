function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.addEventListener('DOMContentLoaded', function() {
  const controls = document.getElementById('controls');
  const boxes = document.getElementById('boxes');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');

  createButton.addEventListener('click', function() {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    boxes.innerHTML = ''; // Очищаємо попередні елементи
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
    boxes.appendChild(fragment);
  }

  function destroyBoxes() {
    boxes.innerHTML = '';
  }
});