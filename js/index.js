import data from './info.js';

// const cardList = document.querySelector('.cards-list');

// POPUP WINDOW //

const cardPopupWindow = document.querySelector('.card-popup-window');
const seeProjectBtn = document.querySelectorAll('.see-btn');
const seeProjectImg = document.querySelectorAll('.card-image');
const closedWind = document.querySelector('#close-pop');

const arr = [seeProjectBtn, seeProjectImg];
arr.forEach((item) => {
  item.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      cardPopupWindow.classList.add('open-pop-up');
      const filteredCard = data.filter((card) => card.id === Number(link.dataset.indexNumber));
      const title = document.querySelector('.card-popup-window .popup-main-container .main-container .title h2');
      const info = document.querySelectorAll('.card-popup-window .main-container .info span');
      const img = document.querySelector('.card-popup-window .main-container .img-container img');
      const detail = document.querySelector('.card-popup-window .main-container .text-container p');
      const techno = document.querySelector('#lang');
      const links = document.querySelectorAll('.card-popup-window .main-container .about-links a');

      title.innerHTML = filteredCard[0].name;
      img.src = filteredCard[0].image;
      detail.innerHTML = filteredCard[0].fullDesciption;

      for (let i = 0; i < Array.from(info).length; i += 1) {
        if (i === 0) {
          info[i].innerHTML = filteredCard[0].description.type;
        } else if (i === 2) {
          info[i].innerHTML = filteredCard[0].description.interface;
        } else if (i === 4) {
          info[i].innerHTML = filteredCard[0].description.year;
        }
      }

      const technologiesChild = [...techno.childNodes];
      technologiesChild.forEach((child, index) => {
        techno.removeChild(technologiesChild[index]);
      });
      filteredCard[0].technologies.forEach((item) => {
        const techItem = document.createElement('li');
        const techLink = document.createElement('a');
        techLink.href = '#';
        techLink.innerText = item;
        techItem.appendChild(techLink);
        techno.appendChild(techItem);
      });
      links[0].href = filteredCard[0].liveDemo;
      links[1].href = filteredCard[0].sourceCode;
    });
  });
});

closedWind.addEventListener('click', () => {
  cardPopupWindow.classList.remove('open-pop-up');
});