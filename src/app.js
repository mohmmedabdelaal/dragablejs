import 'core-js/stable';
import 'regenerator-runtime/runtime';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const text = button.textContent;

  navigator.clipboard
    .writeText(text)
    .then((cpy) => {
      console.log(cpy);
    })
    .catch((err) => {});
});
