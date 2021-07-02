const refs = {
  amountInput: document.querySelector('input[type="number"]'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let innerHTML = '';

  for (let i = 0; i < amount; i++) {
    let color = Math.floor(Math.random() * 16777215).toString(16);

    innerHTML += `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: #${color}"></div>`;
  }
  refs.boxesContainer.innerHTML = innerHTML;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}

refs.renderBtn.addEventListener('click', () =>
  createBoxes(refs.amountInput.value),
);

refs.destroyBtn.addEventListener('click', () => destroyBoxes());
