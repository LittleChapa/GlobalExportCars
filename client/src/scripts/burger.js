import { getAllAbout } from '../http/aboutAPI';
import { getMain, updateMain } from '../http/mainAPI';

const main = document.querySelector('#main');
const mainTitle = document.querySelector('#mainTitle');
const mainDescr = document.querySelector('#mainDescr');
const list = document.querySelector('#list');
const burger = document.querySelector('#burger');
const listItem = document.querySelectorAll('.header__list-item');
const logoMobile = document.querySelector('.header__mobile-link');
const listItems = Array.from(listItem);
const aboutTexts = document.querySelectorAll('.about__content-text');
listItems.unshift(logoMobile);

listItems.forEach((item) => {
  onBurger(item);
});
onBurger(burger);
function onBurger(element) {
  element.addEventListener('click', () => {
    if ((element == logoMobile && !burger.classList.contains('header__burger_active')) || window.innerWidth > 768) {
      return;
    }
    burger.classList.toggle('header__burger_active');
    list.classList.toggle('header__list_active');
    document.body.classList.toggle('noscroll');
  });
}

getMain(1).then((data) => {
  main.style.backgroundImage = `url(${process.env.APP_API_URL + '/' + data.img})`;
  main.style.backgroundPosition = 'center';
  mainTitle.innerText = data.title;
  mainDescr.innerText = data.descr;
});

getAllAbout().then((data) => {
  const newData = data.sort(function (a, b) {
    return a.id - b.id;
  });
  aboutTexts.forEach((item, index) => {
    item.innerText = data[index].text;
  });
});
