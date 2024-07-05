// додати елементи інтерфесу ✅
// підключити бібліотеку flatpickr ✅
// налаштувати бібліотеку
//
//
//
//
//
//
//
//

// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  userInput: document.querySelector('input[type="text"]'),
  strButton: document.querySelector('button[data-start]'),
  userDays: document.querySelector('span[data-days'),
  userHours: document.querySelector('span[data-hours'),
  userMinutes: document.querySelector('span[data-minutes'),
  userSeconds: document.querySelector('span[data-seconds'),
};
const { userInput, strButton, userDays, userHours, userMinutes, userSeconds } =
  elements;

strButton.disabled = true;
let userSelectedDate = 0;
let timerId = null;

strButton.addEventListener('click', () => updateCountDown());

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handlerUserTime(selectedDates[0]);
    userSelectedDate = selectedDates[0].getTime();
  },
};
flatpickr(userInput, options);

function handlerUserTime(timeInput) {
  if (timeInput.getTime() < new Date().getTime()) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please choose a date in the future',
    });
    return;
  }
  strButton.disabled = false;
}

function calculatedTimer() {
  let now = new Date().getTime();
  let future = userSelectedDate;
  if (future - now <= 0) {
    clearTimeout(timerId);
    return convertMs(0);
  }
  strButton.disabled = true;
  const counter = future - now;
  const objDate = convertMs(counter);
  createTimer(objDate);
  updateCountDown();
}

function createTimer(obj) {
  userDays.textContent = String(obj.days).padStart(2, '0');
  userHours.textContent = String(obj.hours).padStart(2, '0');
  userMinutes.textContent = String(obj.minutes).padStart(2, '0');
  userSeconds.textContent = String(obj.seconds).padStart(2, '0');
}

function updateCountDown() {
  timerId = setTimeout(calculatedTimer, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = String(Math.floor(ms / day)).padStart(2, '0');
  // Remaining hours
  const hours = String(Math.floor((ms % day) / hour)).padStart(2, '0');
  // Remaining minutes
  const minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(
    2,
    '0'
  );
  // Remaining seconds
  const seconds = String(
    Math.floor((((ms % day) % hour) % minute) / second)
  ).padStart(2, '0');

  return { days, hours, minutes, seconds };
}
