const ingredientsRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngredientItem = ingridient => {
  const ingridientRef = document.createElement('li');
  ingridientRef.textContent = ingridient;
  return ingridientRef;
};

ingredientsRef.append(...ingredients.map(makeIngredientItem));
