// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
};

function updateCounter() {
  refs.counter.textContent = counterValue;
}

refs.incrementBtn.addEventListener('click', () => {
  increment();
  updateCounter();
});

refs.decrementBtn.addEventListener('click', () => {
  decrement();
  updateCounter();
});
