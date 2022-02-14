const searchInputEl = document.getElementById('search-input');

let searchCollapsed = true;

window.onresize = resizeEvent => {
  if (window.innerWidth > 768) {
    showSearchBar(true);
  } else {
    showSearchBar();
  }
  searchCollapsed = true;
};

document.querySelectorAll('[data-toggle="popover"]').forEach(el => {
  el.addEventListener('mouseenter', onPopoverMouseover);
});

function onPopoverMouseover(ev) {
  const el = ev.target;
  el.removeEventListener('mouseenter', onPopoverMouseover);
  const coords = el.getBoundingClientRect();
  

  const popover = document.createElement('div');
  popover.classList.add('px-4', 'py-3', 'border', 'bg-light', 'rounded', 'shadow', 'position-absolute');
  popover.innerText = el.title;
  popover.style.top = coords.bottom + window.scrollY + 5 + 'px';
  document.body.append(popover);

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.style.display = 'inline-block';
  closeBtn.innerHTML = '<i class="bi bi-x"></i>';
  closeBtn.classList.add('position-absolute', 'border-0');
  closeBtn.style.cssText = `
    right: 0;
    top: .25rem;
    font-size: .8em;
  `;

  closeBtn.addEventListener('click', (ev) => {
    popover.remove();
    el.addEventListener('mouseenter', onPopoverMouseover);
  });
  popover.append(closeBtn);

  popover.style.left = coords.left + coords.width / 2 - popover.clientWidth / 2 + 'px';
}

document.getElementById('search-button').onclick = clickEvent => {
  if (window.innerWidth >= 768) return;

  if (searchCollapsed) {
    showSearchBar(true);
    searchInputEl.focus();
  } else {
    showSearchBar();
  }
  searchCollapsed = !searchCollapsed;
};

function showSearchBar(show = false) {
  if (show) {
    searchInputEl.style.cssText = `
      width: 1%;
      height: calc(1.5em + .75rem + 2px);
      padding: .375rem .75rem;
    `;
  } else {
    searchInputEl.style.cssText = `
      padding: 0;
      width: 0;
      height: 0;
      border: 0;
    `;
  }
}