// Каталог автомобилей
const button = document.querySelector('.catalog__list');
const listSelected = document.querySelector('.catalog__list-selected');
const dropDownlist = document.querySelector('.catalog__list-select');
const listItems = document.querySelectorAll('.catalog__list-item');
const listArrow = document.querySelector('#dropdown-list-arrow');

button.addEventListener('click', () => {
  dropDownlist.classList.toggle('catalog__list-select_active');
  listArrow.classList.toggle('catalog__list-arrow_active');
});

function dropDownList(arrayList, className) {
  arrayList.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      listItems.forEach((item) => {
        item.classList.remove(className);
      });
      listItem.classList.add(className);
      listSelected.innerText = listItem.innerText;
    });
  });
}
dropDownList(listItems, 'catalog__list-item_selected');

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
