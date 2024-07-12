// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  form: document.querySelector('.form'),
};
const { form } = elements;

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const objPromise = {
    delay: form.elements.delay.value,
    isSuccess: form.elements.state.value,
  };
  createPromise(objPromise);
});

function createPromise(obj) {
  const { delay, isSuccess } = obj;
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (isSuccess === 'fulfilled') {
        resolve(
          iziToast.success({
            title: 'OK',
            message: `✅ Fulfilled promise in ${delay}ms`,
          })
        );
      } else {
        rejected(
          iziToast.warning({
            title: 'Warning',
            message: `❌ Rejected promise in ${delay}ms`,
          })
        );
      }
    }, delay);
  });
  promise.then(value => console.log(value)).catch(error => console.log(error));
}
