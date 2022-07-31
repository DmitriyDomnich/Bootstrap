const square = document.querySelector('.square');
const stopBtn = document.getElementById('stopBtn');
const field = document.getElementById('field');

let isMoving = false,
  moved = 0,
  cancelAnimation;

square.addEventListener('click', (_) => {
  if (!isMoving) {
    cancelAnimation = requestAnimationFrame(moveSquare);
  }
  isMoving = true;
});

function moveSquare(_) {
  const { style } = square;
  if (!isOverflowed()) {
    style.transform = `translateX(${moved++}px)`;
  } else {
    moved = 0;
    style.transform = `translateX(${moved++}px)`;
  }
  cancelAnimation = requestAnimationFrame(moveSquare);
}

function isOverflowed() {
  const { right: fieldRight } = field.getBoundingClientRect();
  const { right: squareRight } = square.getBoundingClientRect();
  if (squareRight < fieldRight) {
    return false;
  }
  return true;
}

stopBtn.addEventListener('click', (_) => {
  if (isMoving) {
    cancelAnimationFrame(cancelAnimation);
    isMoving = false;
  }
});
