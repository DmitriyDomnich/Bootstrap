const clientInfo = window.navigator.userAgent;
const clientInfoEl = document.createElement('p');
clientInfoEl.textContent = clientInfo;

document.querySelector('footer').append(clientInfoEl);
