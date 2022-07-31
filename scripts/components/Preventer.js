document.body.addEventListener('contextmenu', (ev) => {
  ev.preventDefault();
});
document.body.addEventListener('keydown', (ev) => {
  if (
    ev.key === 'F12' ||
    (ev.key.toLocaleLowerCase() === 'c' && (ev.metaKey || ev.ctrlKey))
  ) {
    ev.preventDefault();
  }
});
