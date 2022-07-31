const link = document.querySelector('a.text-danger');
const textBlock = document.querySelector('[hidden]');
const disableLinkBtn = document.querySelector('#disableLinkBtn');

link.addEventListener('click', (_) => {
  textBlock.hidden = !textBlock.hidden;
  if (textBlock.hidden) {
    link.textContent = 'Show';
  } else {
    link.textContent = 'Hide';
  }
});

disableLinkBtn.addEventListener('click', (_) => {
  link.style.pointerEvents = 'none';
});
