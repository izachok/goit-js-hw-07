//  HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngridientItem = ingridient => {
  const ingridientRef = document.createElement('li');
  ingridientRef.textContent = ingridient;
  return ingridientRef;
};

document
  .querySelector('#ingredients')
  .append(...ingredients.map(makeIngridientItem));
