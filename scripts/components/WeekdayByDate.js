const dateInput = document.querySelector('input[type=date]');
const resultSpan = dateInput.nextElementSibling;

dateInput.addEventListener('change', ({ target }) => {
  resultSpan.textContent = `Weekday: ${getWeekdayByDate(target.value)}`;
});

function getWeekdayByDate(date) {
  const day = new Date(date).getDay();
  return day ? day : 7;
}
