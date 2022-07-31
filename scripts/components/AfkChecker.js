import { INTERACTION_EVENTS } from '../interactionEvents.js';

let isUserHere = true;

INTERACTION_EVENTS.forEach((evName) => {
  document.body.addEventListener(evName, () => (isUserHere = true));
});

setInterval(() => {
  if (isUserHere) {
    isUserHere = false;
  } else {
    if (confirm('Yo you still here?')) {
      isUserHere = false;
    } else {
      window.close();
    }
  }
}, 10000); // 5 min is 300 000 ms
