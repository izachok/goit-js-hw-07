const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', () => {
  increment();
  updateCounter();
});

refs.decrementBtn.addEventListener('click', () => {
  decrement();
  updateCounter();
});

let counterValue = 0;

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

function updateCounter() {
  refs.counter.textContent = counterValue;
}
