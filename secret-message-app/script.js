const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h2').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const selected = document.querySelector('#link-input');
  selected.value = `${window.location}#${encrypted}`;
  selected.select();
});
