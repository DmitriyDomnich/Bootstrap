import { onWindowResize } from './components/search-bar.js';
import './components/Scroller.js';
import './components/AfkChecker.js';
import './components/ClientInfo.js';
import './components/Preventer.js';
import './components/ProgressBar.js';
import './components/ThemeSwitch.js';
import './components/Square.js';
import './components/Hider.js';
import './components/WeekdayByDate.js';
import './components/Words.js';

window.onresize = (ev) => {
  onWindowResize(ev);

  document.querySelectorAll('.my-popover').forEach((el) => el.remove());
  document
    .querySelectorAll('[data-toggle="popover"]')
    .forEach((el) => el.addEventListener('mouseenter', onPopoverMouseover));
};

document
  .querySelectorAll('[data-toggle="popover"]')
  .forEach((el) => el.addEventListener('mouseenter', onPopoverMouseover));

function onPopoverMouseover(ev) {
  const el = ev.target;

  el.removeEventListener('mouseenter', onPopoverMouseover);

  const coords = el.getBoundingClientRect();

  const popover = getPopover(el);
  popover.style.top = coords.bottom + window.scrollY + 5 + 'px';

  document.body.append(popover);
  popover.style.left =
    coords.left + coords.width / 2 - popover.clientWidth / 2 + 'px';
}

function getPopover(el) {
  const popover = document.createElement('div');
  popover.classList.add(
    'px-4',
    'py-3',
    'border',

    'rounded',
    'shadow',
    'position-absolute',
    'my-popover',
    'background',
    'text'
  );
  popover.innerHTML = el.ariaLabel;

  const closeBtn = getClosePopoverButton();

  closeBtn.addEventListener('click', (ev) => {
    popover.remove();
    el.addEventListener('mouseenter', onPopoverMouseover);
  });

  popover.append(closeBtn);
  return popover;
}
function getClosePopoverButton() {
  const closeBtn = document.createElement('button');

  closeBtn.type = 'button';
  closeBtn.innerHTML = '<i class="bi bi-x"></i>';
  closeBtn.style.cssText = `
    right: 0;
    top: .25rem;
    font-size: .8em;
    border: none;
    position: absolute;
  `;
  closeBtn.classList.add('text', 'background');

  return closeBtn;
}
