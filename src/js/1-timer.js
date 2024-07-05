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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handlerUserInput(selectedDates[0]);
    userInput.value = '';
  },
};
flatpickr(userInput, options);
let userSelectedDate = '';
userInput.textContent = '';
strButton.disabled = true;

function handlerUserInput(results) {
  const date = new Date();
  if (date > results.getTime()) {
    return alert('Please choose a date in the future');
  }
  createTimer(results);
}

userInput.addEventListener('input', evt => evt.preventDefault());

function createTimer(res) {
  setInterval(() => {
    const date = new Date();
    const value = res.getTime() - date.getTime();
    const lastDate = convertMs(value);
    createHTMLClock(lastDate);
  }, 1000);
}

function createHTMLClock(lastDate) {
  userDays.textContent = lastDate.days;
  userHours.textContent = lastDate.hours;
  userMinutes.textContent = lastDate.minutes;
  userSeconds.textContent = lastDate.seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
