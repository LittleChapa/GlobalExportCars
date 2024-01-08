import toastr from 'toastr';
import { getAllAbout } from '../http/aboutAPI';
import { getAllCountry, getOneCountry } from '../http/countryAPI';
import { getAllFaq } from '../http/faqAPI';
import { getMain, updateMain } from '../http/mainAPI';
import { getAllService } from '../http/servicesAPI';
import { createApplications } from '../http/userAPI';

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

const servicesWrapper = document.querySelector('.services__wrapper');

const faqWrapper = document.querySelector('.faq__content');

const applicationsName = document.querySelector('#applicationsName');
const applicationsPhone = document.querySelector('#applicationsPhone');
const applicationsMail = document.querySelector('#applicationsMail');
const applicationsService = document.querySelector('#applicationsService');
const applicationsWish = document.querySelector('#applicationsWish');
const applicationsSend = document.querySelector('#applicationsSend');

const feedbackFormListSelectedDefault = document.querySelector('.feedback__form-list-item');

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

function animationDropList(items, blocks, icon, blockActive, iconActive) {
  const itemsHeight = [];
  blocks.forEach((item) => {
    itemsHeight.push(item.offsetHeight);
    item.style.height = '0px';
  });
  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i] == item && blocks[i].style.height == '0px') {
          blocks[i].style.height = `${itemsHeight[i]}px`;
          blocks[i].classList.add(blockActive);
          icon[i].classList.add(iconActive);
        } else {
          blocks[i].style.height = '0px';
          blocks[i].classList.remove(blockActive);
          icon[i].classList.remove(iconActive);
        }
      }
    });
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

getAllService().then((data) => {
  data.forEach((item) => {
    // Создаем элемент div с классом "services__card"
    let servicesCard = document.createElement('div');
    servicesCard.className = 'services__card';

    // Создаем заголовок h2
    let titleElement = document.createElement('h2');
    titleElement.className = 'services__card-title';
    titleElement.textContent = item.title;

    // Создаем абзац с описанием
    let descrElement = document.createElement('p');
    descrElement.className = 'services__card-descr';
    descrElement.textContent = item.descr;

    // Создаем абзац с ценой
    let priceElement = document.createElement('p');
    priceElement.className = 'services__card-price';
    priceElement.textContent = item.price;

    // Добавляем созданные элементы внутрь элемента servicesCard
    servicesCard.appendChild(titleElement);
    servicesCard.appendChild(descrElement);
    servicesCard.appendChild(priceElement);

    // Добавляем servicesCard в DOM, например, внутрь элемента с id "container"
    servicesWrapper.appendChild(servicesCard);
  });
});

getAllFaq()
  .then((data) => {
    data.forEach((item) => {
      // Создаем элемент div с классом "faq__content-item"
      let contentItem = document.createElement('div');
      contentItem.className = 'faq__content-item';

      // Создаем заголовок h3
      let titleElement = document.createElement('h3');
      titleElement.className = 'faq__content-item-title';
      titleElement.textContent = item.title;

      // Создаем абзац с текстом
      let textElement = document.createElement('p');
      textElement.className = 'faq__content-item-text';
      textElement.textContent = item.descr;

      // Создаем блок с иконкой (SVG)
      let iconDiv = document.createElement('div');
      iconDiv.className = 'faq__content-item-icon';

      let svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svgIcon.setAttribute('width', '31');
      svgIcon.setAttribute('height', '31');
      svgIcon.setAttribute('viewBox', '0 0 31 31');
      svgIcon.setAttribute('fill', 'none');

      let pathIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathIcon.setAttribute(
        'd',
        'M16.8033 13.8237L16.813 1.58282C16.813 1.21666 16.6676 0.865493 16.4087 0.606575C16.1498 0.347658 15.7986 0.202199 15.4324 0.202199C15.0663 0.2022 14.7151 0.347657 14.4562 0.606574C14.1973 0.865492 14.0518 1.21666 14.0518 1.58282L14.0615 13.8237L1.82061 13.814C1.45445 13.814 1.10328 13.9595 0.844365 14.2184C0.585447 14.4773 0.439988 14.8285 0.439988 15.1946C0.439988 15.5608 0.585447 15.912 0.844365 16.1709C1.10328 16.4298 1.45445 16.5753 1.82061 16.5753L14.0615 16.5655L14.0518 28.8064C14.051 28.9879 14.0863 29.1678 14.1554 29.3357C14.2245 29.5035 14.3262 29.656 14.4545 29.7843C14.5829 29.9127 14.7354 30.0144 14.9032 30.0835C15.071 30.1526 15.2509 30.1878 15.4324 30.1871C15.6139 30.1878 15.7938 30.1526 15.9616 30.0835C16.1295 30.0144 16.282 29.9127 16.4103 29.7843C16.5387 29.656 16.6403 29.5035 16.7095 29.3357C16.7786 29.1678 16.8138 28.9879 16.813 28.8064L16.8033 16.5655L29.0442 16.5753C29.2257 16.576 29.4056 16.5408 29.5734 16.4717C29.7413 16.4026 29.8938 16.3009 30.0221 16.1725C30.1505 16.0442 30.2522 15.8917 30.3213 15.7239C30.3904 15.556 30.4256 15.3761 30.4248 15.1946C30.4256 15.0131 30.3904 14.8332 30.3213 14.6654C30.2522 14.4976 30.1505 14.3451 30.0221 14.2167C29.8938 14.0884 29.7413 13.9867 29.5734 13.9176C29.4056 13.8485 29.2257 13.8133 29.0442 13.814L16.8033 13.8237Z'
      );
      pathIcon.setAttribute('fill', '#AEBBFF');

      svgIcon.appendChild(pathIcon);
      iconDiv.appendChild(svgIcon);

      // Добавляем созданные элементы в родительский элемент
      contentItem.appendChild(titleElement);
      contentItem.appendChild(textElement);
      contentItem.appendChild(iconDiv);

      // Добавляем
      faqWrapper.appendChild(contentItem);
    });
  })
  .then(() => {
    const faqItems = document.querySelectorAll('.faq__content-item');
    const faqItemsBlock = document.querySelectorAll('.faq__content-item-text');
    const faqIcon = document.querySelectorAll('.faq__content-item-icon');
    animationDropList(
      faqItems,
      faqItemsBlock,
      faqIcon,
      'faq__content-item-text_active',
      'faq__content-item-icon_active'
    );
  });

applicationsSend.addEventListener('click', (e) => {
  const feedbackListItems = document.querySelectorAll('.feedback__form-list-item');

  e.preventDefault();
  if (!applicationsName.value || !applicationsPhone.value || !applicationsMail.value || !applicationsWish.value) {
    toastr.error('Вы заполнили не все поля!');
    return;
  }
  createApplications(
    applicationsName.value,
    applicationsPhone.value,
    applicationsMail.value,
    applicationsService.innerText,
    applicationsWish.value
  ).then(() => {
    toastr.success('Заявка успешно отправлена!');
    applicationsName.value = '';
    applicationsPhone.value = '';
    applicationsMail.value = '';
    applicationsService.innerText = 'Консультация';
    applicationsWish.value = '';
    feedbackListItems.forEach((item, i) => {
      item.classList.remove('feedback__form-list-item_selected');
    });
    feedbackListItems[0].classList.add('feedback__form-list-item_selected');
    console.log(feedbackListItems);
  });
});
