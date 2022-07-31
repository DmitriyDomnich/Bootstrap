const textInput = document.getElementById('phrase');
const submitBtn = document.getElementById('getList');
const ulEl = document.getElementById('list');

submitBtn.addEventListener('click', (_) => {
  ulEl.innerHTML = '';
  const phrase = textInput.value.trim();
  const words = phrase.split(' ');
  words.forEach((word, index, { length }) => {
    const liEl = document.createElement('li'),
      lastIndex = length - 1;
    let text;
    if (index === lastIndex - 1 || index === lastIndex) {
      text = word.toLowerCase();
    } else if (!index) {
      text = word.toUpperCase();
    } else {
      text = word;
    }

    liEl.textContent = text;
    ulEl.append(liEl);
  });
  alert(`a count: ${countA(phrase)}`);
});

function countA(phrase) {
  return Array.from(phrase).reduce(
    (count, letter) => (letter === 'a' ? count + 1 : count),
    0
  );
}
