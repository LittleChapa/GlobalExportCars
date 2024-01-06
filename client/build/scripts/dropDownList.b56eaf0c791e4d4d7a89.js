/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/dropDownList.js ***!
  \*************************************/
// // Каталог автомобилей
// const catalogButton = document.querySelector('.catalog__list');
// const catalogListSelected = document.querySelector('.catalog__list-selected');
// const catalogDropDownList = document.querySelector('.catalog__list-select');
// const catalogListItems = document.querySelectorAll('.catalog__list-item');
// const catalogListArrow = document.querySelector('#catalog-dropdown-list-arrow');

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

// dropDownList(
//   catalogButton,
//   catalogDropDownList,
//   catalogListArrow,
//   catalogListItems,
//   catalogListSelected,
//   'catalog__list-select_active',
//   'catalog__list-arrow_active',
//   'catalog__list-item_selected'
// );

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9kcm9wRG93bkxpc3QuYjU2ZWFmMGM3OTFlNGQ0ZDdhODkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NjcmlwdHMvZHJvcERvd25MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vINCa0LDRgtCw0LvQvtCzINCw0LLRgtC+0LzQvtCx0LjQu9C10LlcclxuLy8gY29uc3QgY2F0YWxvZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19saXN0Jyk7XHJcbi8vIGNvbnN0IGNhdGFsb2dMaXN0U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fbGlzdC1zZWxlY3RlZCcpO1xyXG4vLyBjb25zdCBjYXRhbG9nRHJvcERvd25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX2xpc3Qtc2VsZWN0Jyk7XHJcbi8vIGNvbnN0IGNhdGFsb2dMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fbGlzdC1pdGVtJyk7XHJcbi8vIGNvbnN0IGNhdGFsb2dMaXN0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0YWxvZy1kcm9wZG93bi1saXN0LWFycm93Jyk7XHJcblxyXG5mdW5jdGlvbiBkcm9wRG93bkxpc3QoXHJcbiAgYnV0dG9uLFxyXG4gIGRyb3BEb3duTGlzdCxcclxuICBhcnJvdyxcclxuICBhcnJheUxpc3QsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgZHJvcERvd25MaXN0Q2xhc3NOYW1lLFxyXG4gIGFycm93Q2xhc3NOYW1lLFxyXG4gIGFycmF5TGlzdENsYXNzTmFtZVxyXG4pIHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShkcm9wRG93bkxpc3RDbGFzc05hbWUpO1xyXG4gICAgYXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShhcnJvd0NsYXNzTmFtZSk7XHJcbiAgfSk7XHJcbiAgYXJyYXlMaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XHJcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYXJyYXlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYXJyYXlMaXN0Q2xhc3NOYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoYXJyYXlMaXN0Q2xhc3NOYW1lKTtcclxuICAgICAgc2VsZWN0ZWQuaW5uZXJUZXh0ID0gbGlzdEl0ZW0uaW5uZXJUZXh0O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGRyb3BEb3duTGlzdChcclxuLy8gICBjYXRhbG9nQnV0dG9uLFxyXG4vLyAgIGNhdGFsb2dEcm9wRG93bkxpc3QsXHJcbi8vICAgY2F0YWxvZ0xpc3RBcnJvdyxcclxuLy8gICBjYXRhbG9nTGlzdEl0ZW1zLFxyXG4vLyAgIGNhdGFsb2dMaXN0U2VsZWN0ZWQsXHJcbi8vICAgJ2NhdGFsb2dfX2xpc3Qtc2VsZWN0X2FjdGl2ZScsXHJcbi8vICAgJ2NhdGFsb2dfX2xpc3QtYXJyb3dfYWN0aXZlJyxcclxuLy8gICAnY2F0YWxvZ19fbGlzdC1pdGVtX3NlbGVjdGVkJ1xyXG4vLyApO1xyXG5cclxuLy8g0J7RgtC/0YDQsNCy0LjRgtGMINC30LDRj9Cy0LrRg1xyXG5jb25zdCBmZWVkYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fZm9ybS1saXN0Jyk7XHJcbmNvbnN0IGZlZWRiYWNrTGlzdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19mb3JtLWxpc3Qtc2VsZWN0ZWQnKTtcclxuY29uc3QgZmVlZGJhY2tEcm9wRG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2Zvcm0tbGlzdC1zZWxlY3QnKTtcclxuY29uc3QgZmVlZGJhY2tMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2Zvcm0tbGlzdC1pdGVtJyk7XHJcbmNvbnN0IGZlZWRiYWNrTGlzdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrLWRyb3Bkb3duLWxpc3QtYXJyb3cnKTtcclxuXHJcbmRyb3BEb3duTGlzdChcclxuICBmZWVkYmFja0J1dHRvbixcclxuICBmZWVkYmFja0Ryb3BEb3duTGlzdCxcclxuICBmZWVkYmFja0xpc3RBcnJvdyxcclxuICBmZWVkYmFja0xpc3RJdGVtcyxcclxuICBmZWVkYmFja0xpc3RTZWxlY3RlZCxcclxuICAnZmVlZGJhY2tfX2Zvcm0tbGlzdC1zZWxlY3RfYWN0aXZlJyxcclxuICAnZmVlZGJhY2tfX2Zvcm0tbGlzdC1hcnJvd19hY3RpdmUnLFxyXG4gICdmZWVkYmFja19fZm9ybS1saXN0LWl0ZW1fc2VsZWN0ZWQnXHJcbik7XHJcblxyXG4vLyDQp9Cw0YHRgtC+INC30LDQtNCw0LLQsNC10LzRi9C1INCy0L7Qv9GA0L7RgdGLXHJcblxyXG5jb25zdCBmYXFJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX2NvbnRlbnQtaXRlbScpO1xyXG5jb25zdCBmYXFJdGVtc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9fY29udGVudC1pdGVtLXRleHQnKTtcclxuY29uc3QgZmFxSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX2NvbnRlbnQtaXRlbS1pY29uJyk7XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25Ecm9wTGlzdChpdGVtcywgYmxvY2tzLCBpY29uLCBibG9ja0FjdGl2ZSwgaWNvbkFjdGl2ZSkge1xyXG4gIGNvbnN0IGl0ZW1zSGVpZ2h0ID0gW107XHJcbiAgYmxvY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW1zSGVpZ2h0LnB1c2goaXRlbS5vZmZzZXRIZWlnaHQpO1xyXG4gICAgaXRlbS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICB9KTtcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpdGVtc1tpXSA9PSBpdGVtICYmIGJsb2Nrc1tpXS5zdHlsZS5oZWlnaHQgPT0gJzBweCcpIHtcclxuICAgICAgICAgIGJsb2Nrc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtpdGVtc0hlaWdodFtpXX1weGA7XHJcbiAgICAgICAgICBibG9ja3NbaV0uY2xhc3NMaXN0LmFkZChibG9ja0FjdGl2ZSk7XHJcbiAgICAgICAgICBpY29uW2ldLmNsYXNzTGlzdC5hZGQoaWNvbkFjdGl2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJsb2Nrc1tpXS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICAgICAgICAgIGJsb2Nrc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGJsb2NrQWN0aXZlKTtcclxuICAgICAgICAgIGljb25baV0uY2xhc3NMaXN0LnJlbW92ZShpY29uQWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hbmltYXRpb25Ecm9wTGlzdChmYXFJdGVtcywgZmFxSXRlbXNCbG9jaywgZmFxSWNvbiwgJ2ZhcV9fY29udGVudC1pdGVtLXRleHRfYWN0aXZlJywgJ2ZhcV9fY29udGVudC1pdGVtLWljb25fYWN0aXZlJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==