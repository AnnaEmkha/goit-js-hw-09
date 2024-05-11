const formData = { email: '', message: '' };
const form = document.querySelector(`.feedback-form`);

window.addEventListener('DOMContentLoaded', fillText);

form.addEventListener('input', handleInput);
form.addEventListener('submit', sendData);

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }
  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

function sendData(event) {
  const { email, message } = form.elements;
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log({ email: email.value, message: message.value });

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
    formData.message = '';
    form.reset();
}
