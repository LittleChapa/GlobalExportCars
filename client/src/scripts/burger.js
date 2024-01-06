import { getAllAbout } from '../http/aboutAPI';
import { getAllCountry, getOneCountry } from '../http/countryAPI';
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

const catalogContent = document.querySelector('.catalog__content');
const catalogButton = document.querySelector('.catalog__list');
const catalogListSelected = document.querySelector('.catalog__list-selected');
const catalogDropDownList = document.querySelector('.catalog__list-select');
const catalogListArrow = document.querySelector('#catalog-dropdown-list-arrow');
let catalogSpanCountryId = 1;

catalogButton.addEventListener('click', () => {
  catalogDropDownList.classList.toggle('catalog__list-select_active');
  catalogListArrow.classList.toggle('catalog__list-arrow_active');
});

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

getAllCountry().then((data) => {
  catalogListSelected.innerText = data[0].name;
  catalogSpanCountryId = catalogListSelected.attributes.countryId.value;
  data.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.className = 'catalog__list-item';
    listItem.id = item.id;
    listItem.innerText = item.name;
    catalogDropDownList.appendChild(listItem);
    const catalogListItems = document.querySelectorAll('.catalog__list-item');
    catalogListItems.forEach((listItem) => {
      listItem.addEventListener('click', () => {
        catalogSpanCountryId = listItem.id;
        catalogListItems.forEach((item) => {
          item.classList.remove('catalog__list-item_selected');
        });
        listItem.classList.add('catalog__list-item_selected');
        catalogListSelected.innerText = listItem.innerText;
        getOneCountry(catalogSpanCountryId).then((data) => {
          let dataCatalogs = data.catalogs;
          catalogContent.innerHTML = '';
          const newData = dataCatalogs.sort(function (a, b) {
            return a.id - b.id;
          });
          for (let i = 0; i < newData.length; i++) {
            let card = document.createElement('div');
            card.className = 'catalog__content-card';

            let imgContainer = document.createElement('div');
            imgContainer.className = 'catalog__content-card-img';

            let img = document.createElement('img');
            img.src = process.env.APP_API_URL + '/' + dataCatalogs[i].img;
            img.alt = '';

            imgContainer.appendChild(img);

            let aboutContainer = document.createElement('div');
            aboutContainer.className = 'catalog__content-card-about';

            let title = document.createElement('h2');
            title.className = 'catalog__content-card-title';
            title.textContent = dataCatalogs[i].title;

            let year = document.createElement('span');
            year.className = 'catalog__content-card-year';
            year.textContent = dataCatalogs[i].descr;

            let descr = document.createElement('p');
            descr.className = 'catalog__content-card-descr';
            descr.textContent = dataCatalogs[i].characteristic;

            let drive = document.createElement('p');
            drive.className = 'catalog__content-card-drive';
            drive.textContent = dataCatalogs[i].drive;

            aboutContainer.appendChild(title);
            aboutContainer.appendChild(year);
            aboutContainer.appendChild(descr);
            aboutContainer.appendChild(drive);

            card.appendChild(imgContainer);
            card.appendChild(aboutContainer);

            catalogContent.appendChild(card);
          }
          return data.catalogs;
        });
      });
    });
  });
});

getOneCountry(1).then((data) => {
  let dataCatalogs = data.catalogs;
  for (let i = 0; i < dataCatalogs.length; i++) {
    let card = document.createElement('div');
    card.className = 'catalog__content-card';

    let imgContainer = document.createElement('div');
    imgContainer.className = 'catalog__content-card-img';

    let img = document.createElement('img');
    img.src = process.env.APP_API_URL + '/' + dataCatalogs[i].img;
    img.alt = '';

    imgContainer.appendChild(img);

    let aboutContainer = document.createElement('div');
    aboutContainer.className = 'catalog__content-card-about';

    let title = document.createElement('h2');
    title.className = 'catalog__content-card-title';
    title.textContent = dataCatalogs[i].title;

    let year = document.createElement('span');
    year.className = 'catalog__content-card-year';
    year.textContent = dataCatalogs[i].descr;

    let descr = document.createElement('p');
    descr.className = 'catalog__content-card-descr';
    descr.textContent = dataCatalogs[i].characteristic;

    let drive = document.createElement('p');
    drive.className = 'catalog__content-card-drive';
    drive.textContent = dataCatalogs[i].drive;

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(year);
    aboutContainer.appendChild(descr);
    aboutContainer.appendChild(drive);

    card.appendChild(imgContainer);
    card.appendChild(aboutContainer);

    catalogContent.appendChild(card);
  }
});
