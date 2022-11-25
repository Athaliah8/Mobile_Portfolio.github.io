const menuButtonOpen = document.getElementById('mobile-menu');
const menuButtonClose = document.getElementById('mobile-menu-exit');
const navListMenu = document.getElementById('nav-list-menu');
const navItems = document.querySelectorAll('.nav-item');

function menuToggle() {
  if (navListMenu.classList.contains('open')) {
    navListMenu.classList.remove('open');
    menuButtonOpen.style.display = 'block';
    menuButtonClose.style.display = 'none';
    navListMenu.style.display = 'none';
  } else {
    navListMenu.classList.add('open');
    menuButtonOpen.style.display = 'none';
    menuButtonClose.style.display = 'block';
    navListMenu.style.display = 'block';
  }
}

menuButtonOpen.addEventListener('click', menuToggle);
menuButtonClose.addEventListener('click', menuToggle);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});

function outputMessage(accepted) {
  const message = document.getElementById('msg');
  if (accepted) {
    message.classList.remove('error');
  } else {
    message.classList.add('error');
    message.innerHTML = 'Please enter a correct email address format';
  }
}

// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementsByClassName('.see-btn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const form = document.querySelector('.container-form');

form.addEventListener('submit', (element) => {
  const email = document.getElementById('email').value;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email !== email.toLowerCase()) {
    element.preventDefault();
    outputMessage(false);
    return;
  }
  if (!emailRegex.test(email)) {
    element.preventDefault();
    outputMessage(false);
    return;
  }
  outputMessage(true);
});
