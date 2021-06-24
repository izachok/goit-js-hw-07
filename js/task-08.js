// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
//     Размеры самого первого div - 30px на 30px
//     Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.
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
