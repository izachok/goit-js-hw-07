// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = rangeRef.value + 'px';

rangeRef.addEventListener('input', event => {
  textRef.style.fontSize = event.currentTarget.value + 'px';
});
