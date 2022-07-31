const searchInputEl = document.getElementById('search-input');

let searchCollapsed = true;

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


export function onWindowResize(ev) {
  if (window.innerWidth > 768) {
    showSearchBar(true);
  } else {
    showSearchBar();
  }
  searchCollapsed = true;
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
      box-shadow: none;
    `;
  }
}