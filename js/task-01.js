const categoriesRefs = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesRefs.length} категории.`);

categoriesRefs.forEach(categoryRef => {
  console.log(`Категория: ${categoryRef.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${categoryRef.querySelectorAll('li').length}`,
  );
});
