// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  const requiredLength = Number(event.currentTarget.dataset.length);

  if (
    !isNaN(requiredLength) &&
    event.currentTarget.value.length === requiredLength
  ) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
});
