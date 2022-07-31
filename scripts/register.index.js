const form = document.querySelector('form');

const passwordInput = document.querySelector('input[name=password]');

const formInputs = [
  document.querySelector('input[name=first-name]'),
  document.querySelector('input[name=last-name]'),
  document.querySelector('input[name=email]'),
  passwordInput,
  document.querySelector('input[name=password-repeat]'),
];

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let err;
  try {
    formInputs.forEach(({ name, value }) => {
      if (name !== 'password-repeat') {
        err = validateInput(value, name);
      } else {
        err = validateInput(value, name, passwordInput.value);
      }
      if (err instanceof Error) {
        throw err;
      }
    });
  } catch (error) {
    alert(error.message);
    return;
  }
  const goalsScreen = window.open('./goals.html');
  const json = JSON.stringify(
    formInputs.map(({ name, value }) => ({ name, value }))
  );
  goalsScreen.alert(json);
});

function validateInput(value, type, additionalValue = null) {
  if (!value.length) {
    return new Error(`${type} has no input.`);
  }
  switch (type) {
    case 'first-name':
    case 'last-name':
      return (
        (value.length > 1 && value.length < 20) ||
        new Error('Name has to be longer than 1 and less than 20 symbols.')
      );
    case 'email':
      return (
        value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) || new Error('Wrong email input pattern.')
      );
    case 'password':
      const lowerCased = value.toLowerCase();
      return value === lowerCased || new Error('Password has to be lowercase.');
    case 'password-repeat':
      console.log(value, additionalValue);
      return value === additionalValue || new Error("Passwords don't match.");
    default:
      return new Error('Wrong type input.');
  }
}
