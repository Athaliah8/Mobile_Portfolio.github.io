const storage = document.querySelector('.container-form');
const email = document.getElementById('email');
const userName = document.getElementById('name');
const message = document.getElementById('msg');
const object = {};

window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));
  if (userInput !== null) {
    userName.value = userInput.nameID;
    email.value = userInput.mail;
    message.value = userInput.msg;
  }
});

// Add to localStorage
storage.addEventListener('input', () => {
  object.nameID = userName.value;
  object.mail = email.value;
  object.msg = message.value;
  localStorage.setItem('data', JSON.stringify(object));
});