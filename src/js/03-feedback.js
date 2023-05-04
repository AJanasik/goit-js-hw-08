import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name= "email"]');
const messageInput = document.querySelector('textarea[name= "message"]');
const button = document.querySelector('button[type= "submit" ]');

function update() {
  const updateItem = JSON.parse(
    localStorage.getItem('feedback-form-state' || '')
  );
  emailInput.value = updateItem.email || '';
  messageInput.value = updateItem.message || '';
}

function saveStatus() {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function clear(ev) {
  ev.preventDefault();
  console.log(data);
  localStorage.clear();
  form.reset();
}

form.addEventListener('input', throttle(fillForm, 500));
button.addEventListener('submit', clear);
