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



<div class="card-popup-window">
    <div class="popup-main-container">
      <div class="main-container">
        <div class="title">
          <h2 id="pop-title"></h2>
        </div>
        <div class="info">
          
         <div class="img-container">
            <img class="card-image" src="img/Snapshoot-Portfolio2.png" alt="popup image">
        </div>
<div class="left-container">
        <div class="text-container">
            <p></p>
        </div>
          <div class="about-links">
            <ul class="languages" id="lang">

            </ul>
              <div class="links">
                <a href="#" class="btn"><span>see live</span><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF"/>
                </svg></span></a>
                  <a href="#" class="btn"><span>source code</span> <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
                    </svg></span></a>
              </div>
          </div>
        </div>
          <div id="close-pop" class="close">
            <i class="fa fa-times"></i>
          </div>
        </div>
          
      </div>
    </div>
  <div class="bar"></div>



