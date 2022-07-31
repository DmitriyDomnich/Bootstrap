document.getElementById('goUp').addEventListener('click', (ev) => {
  ev.preventDefault();
  scrollTo({
    behavior: 'smooth',
    top: 0,
  });
});
