const switchEls = document.querySelectorAll('.theme-switch');

const DARK_ICON = 'bi bi-moon-fill',
  LIGHT_ICON = 'bi bi-moon';

const themeSetting = localStorage.getItem('theme');

if (themeSetting === null) {
  localStorage.setItem('theme', 'light');
}

let isDark = false;

if (localStorage.getItem('theme') === 'dark') {
  isDark = true;
  changeTheme(isDark);
}

switchEls.forEach((switchEl) => {
  switchEl.addEventListener('click', (_) => {
    isDark = !isDark;
    changeTheme(isDark);
  });
});

function changeTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  switchEls.forEach((switchEl) =>
    isDark
      ? (switchEl.children[0].className = DARK_ICON)
      : (switchEl.children[0].className = LIGHT_ICON)
  );
}
