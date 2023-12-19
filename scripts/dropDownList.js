// Каталог автомобилей
const catalogButton = document.querySelector('.catalog__list');
const catalogListSelected = document.querySelector('.catalog__list-selected');
const catalogDropDownList = document.querySelector('.catalog__list-select');
const catalogListItems = document.querySelectorAll('.catalog__list-item');
const catalogListArrow = document.querySelector('#catalog-dropdown-list-arrow');

function dropDownList(
  button,
  dropDownList,
  arrow,
  arrayList,
  selected,
  dropDownListClassName,
  arrowClassName,
  arrayListClassName
) {
  button.addEventListener('click', () => {
    dropDownList.classList.toggle(dropDownListClassName);
    arrow.classList.toggle(arrowClassName);
  });
  arrayList.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      arrayList.forEach((item) => {
        item.classList.remove(arrayListClassName);
      });
      listItem.classList.add(arrayListClassName);
      selected.innerText = listItem.innerText;
    });
  });
}
dropDownList(
  catalogButton,
  catalogDropDownList,
  catalogListArrow,
  catalogListItems,
  catalogListSelected,
  'catalog__list-select_active',
  'catalog__list-arrow_active',
  'catalog__list-item_selected'
);

// Отправить заявку
const feedbackButton = document.querySelector('.feedback__form-list');
const feedbackListSelected = document.querySelector('.feedback__form-list-selected');
const feedbackDropDownList = document.querySelector('.feedback__form-list-select');
const feedbackListItems = document.querySelectorAll('.feedback__form-list-item');
const feedbackListArrow = document.querySelector('#feedback-dropdown-list-arrow');

dropDownList(
  feedbackButton,
  feedbackDropDownList,
  feedbackListArrow,
  feedbackListItems,
  feedbackListSelected,
  'feedback__form-list-select_active',
  'feedback__form-list-arrow_active',
  'feedback__form-list-item_selected'
);

// Часто задаваемые вопросы

const faqItems = document.querySelectorAll('.faq__content-item');
const faqItemsBlock = document.querySelectorAll('.faq__content-item-text');
const faqIcon = document.querySelectorAll('.faq__content-item-icon');

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

animationDropList(faqItems, faqItemsBlock, faqIcon, 'faq__content-item-text_active', 'faq__content-item-icon_active');
