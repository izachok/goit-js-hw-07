const inputRef = document.querySelector('#validation-input');
const requiredLength = Number(
  document.querySelector('#validation-input').dataset.length,
);

inputRef.addEventListener('blur', checkEnteredValue);

function checkEnteredValue(event) {
  const target = event.currentTarget;
  if (!isNaN(requiredLength) && target.value.length === requiredLength) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
  }
}
