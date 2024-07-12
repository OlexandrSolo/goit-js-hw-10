import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
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

function updateCountDown() {
  timerId = setTimeout(calculatedTimer, 1000);
}

function calculatedTimer() {
  let now = new Date().getTime();
  let future = userSelectedDate;
  const counter = future - now;
  if (counter <= 0) {
    clearTimeout(timerId);
    userInput.disabled = false;
    return convertMs(0);
  }
  const objDate = convertMs(counter);
  createTimer(objDate);
  updateCountDown();
}

function handlerUserTime(timeInput) {
  if (timeInput.getTime() < new Date().getTime()) {
    return createWarningMessage()
  }
  strButton.classList.add('isActive');
}

function createTimer(obj) {
  userInput.disabled = true;
  userDays.textContent = String(obj.days).padStart(2, '0');
  userHours.textContent = String(obj.hours).padStart(2, '0');
  userMinutes.textContent = String(obj.minutes).padStart(2, '0');
  userSeconds.textContent = String(obj.seconds).padStart(2, '0');
}

function createWarningMessage() {
  iziToast.warning({
    title: 'Warning',
    message: 'Please choose a date in the future',
  });
  if (strButton.classList.contains("isActive")) {
    strButton.classList.remove("isActive")
  }
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
