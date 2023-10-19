document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const selected = document.querySelector('#link-input');
  selected.value = `${window.location}#${encrypted}`;
  selected.select();
});
