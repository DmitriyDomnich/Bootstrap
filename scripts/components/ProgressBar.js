const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', (_) => {
  const percent =
    (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
  progressBar.style.width = `${percent}%`;
});
