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
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rejected(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise.then(value => console.log(value)).catch(error => console.log(error));
}
