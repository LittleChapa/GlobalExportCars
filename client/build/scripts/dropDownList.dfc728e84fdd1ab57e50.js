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

// export function animationDropList(items, blocks, icon, blockActive, iconActive) {
//   const itemsHeight = [];
//   blocks.forEach((item) => {
//     itemsHeight.push(item.offsetHeight);
//     item.style.height = '0px';
//   });
//   items.forEach((item) => {
//     item.addEventListener('click', (e) => {
//       for (let i = 0; i < items.length; i++) {
//         if (items[i] == item && blocks[i].style.height == '0px') {
//           blocks[i].style.height = `${itemsHeight[i]}px`;
//           blocks[i].classList.add(blockActive);
//           icon[i].classList.add(iconActive);
//         } else {
//           blocks[i].style.height = '0px';
//           blocks[i].classList.remove(blockActive);
//           icon[i].classList.remove(iconActive);
//         }
//       }
//     });
//   });
// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9kcm9wRG93bkxpc3QuZGZjNzI4ZTg0ZmRkMWFiNTdlNTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NjcmlwdHMvZHJvcERvd25MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vINCa0LDRgtCw0LvQvtCzINCw0LLRgtC+0LzQvtCx0LjQu9C10LlcclxuLy8gY29uc3QgY2F0YWxvZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19saXN0Jyk7XHJcbi8vIGNvbnN0IGNhdGFsb2dMaXN0U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fbGlzdC1zZWxlY3RlZCcpO1xyXG4vLyBjb25zdCBjYXRhbG9nRHJvcERvd25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX2xpc3Qtc2VsZWN0Jyk7XHJcbi8vIGNvbnN0IGNhdGFsb2dMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fbGlzdC1pdGVtJyk7XHJcbi8vIGNvbnN0IGNhdGFsb2dMaXN0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0YWxvZy1kcm9wZG93bi1saXN0LWFycm93Jyk7XHJcblxyXG5mdW5jdGlvbiBkcm9wRG93bkxpc3QoXHJcbiAgYnV0dG9uLFxyXG4gIGRyb3BEb3duTGlzdCxcclxuICBhcnJvdyxcclxuICBhcnJheUxpc3QsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgZHJvcERvd25MaXN0Q2xhc3NOYW1lLFxyXG4gIGFycm93Q2xhc3NOYW1lLFxyXG4gIGFycmF5TGlzdENsYXNzTmFtZVxyXG4pIHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcm9wRG93bkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShkcm9wRG93bkxpc3RDbGFzc05hbWUpO1xyXG4gICAgYXJyb3cuY2xhc3NMaXN0LnRvZ2dsZShhcnJvd0NsYXNzTmFtZSk7XHJcbiAgfSk7XHJcbiAgYXJyYXlMaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XHJcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYXJyYXlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYXJyYXlMaXN0Q2xhc3NOYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoYXJyYXlMaXN0Q2xhc3NOYW1lKTtcclxuICAgICAgc2VsZWN0ZWQuaW5uZXJUZXh0ID0gbGlzdEl0ZW0uaW5uZXJUZXh0O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGRyb3BEb3duTGlzdChcclxuLy8gICBjYXRhbG9nQnV0dG9uLFxyXG4vLyAgIGNhdGFsb2dEcm9wRG93bkxpc3QsXHJcbi8vICAgY2F0YWxvZ0xpc3RBcnJvdyxcclxuLy8gICBjYXRhbG9nTGlzdEl0ZW1zLFxyXG4vLyAgIGNhdGFsb2dMaXN0U2VsZWN0ZWQsXHJcbi8vICAgJ2NhdGFsb2dfX2xpc3Qtc2VsZWN0X2FjdGl2ZScsXHJcbi8vICAgJ2NhdGFsb2dfX2xpc3QtYXJyb3dfYWN0aXZlJyxcclxuLy8gICAnY2F0YWxvZ19fbGlzdC1pdGVtX3NlbGVjdGVkJ1xyXG4vLyApO1xyXG5cclxuLy8g0J7RgtC/0YDQsNCy0LjRgtGMINC30LDRj9Cy0LrRg1xyXG5jb25zdCBmZWVkYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fZm9ybS1saXN0Jyk7XHJcbmNvbnN0IGZlZWRiYWNrTGlzdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19mb3JtLWxpc3Qtc2VsZWN0ZWQnKTtcclxuY29uc3QgZmVlZGJhY2tEcm9wRG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2Zvcm0tbGlzdC1zZWxlY3QnKTtcclxuY29uc3QgZmVlZGJhY2tMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2Zvcm0tbGlzdC1pdGVtJyk7XHJcbmNvbnN0IGZlZWRiYWNrTGlzdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrLWRyb3Bkb3duLWxpc3QtYXJyb3cnKTtcclxuXHJcbmRyb3BEb3duTGlzdChcclxuICBmZWVkYmFja0J1dHRvbixcclxuICBmZWVkYmFja0Ryb3BEb3duTGlzdCxcclxuICBmZWVkYmFja0xpc3RBcnJvdyxcclxuICBmZWVkYmFja0xpc3RJdGVtcyxcclxuICBmZWVkYmFja0xpc3RTZWxlY3RlZCxcclxuICAnZmVlZGJhY2tfX2Zvcm0tbGlzdC1zZWxlY3RfYWN0aXZlJyxcclxuICAnZmVlZGJhY2tfX2Zvcm0tbGlzdC1hcnJvd19hY3RpdmUnLFxyXG4gICdmZWVkYmFja19fZm9ybS1saXN0LWl0ZW1fc2VsZWN0ZWQnXHJcbik7XHJcblxyXG4vLyDQp9Cw0YHRgtC+INC30LDQtNCw0LLQsNC10LzRi9C1INCy0L7Qv9GA0L7RgdGLXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uRHJvcExpc3QoaXRlbXMsIGJsb2NrcywgaWNvbiwgYmxvY2tBY3RpdmUsIGljb25BY3RpdmUpIHtcclxuLy8gICBjb25zdCBpdGVtc0hlaWdodCA9IFtdO1xyXG4vLyAgIGJsb2Nrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbi8vICAgICBpdGVtc0hlaWdodC5wdXNoKGl0ZW0ub2Zmc2V0SGVpZ2h0KTtcclxuLy8gICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbi8vICAgfSk7XHJcbi8vICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4vLyAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICBpZiAoaXRlbXNbaV0gPT0gaXRlbSAmJiBibG9ja3NbaV0uc3R5bGUuaGVpZ2h0ID09ICcwcHgnKSB7XHJcbi8vICAgICAgICAgICBibG9ja3NbaV0uc3R5bGUuaGVpZ2h0ID0gYCR7aXRlbXNIZWlnaHRbaV19cHhgO1xyXG4vLyAgICAgICAgICAgYmxvY2tzW2ldLmNsYXNzTGlzdC5hZGQoYmxvY2tBY3RpdmUpO1xyXG4vLyAgICAgICAgICAgaWNvbltpXS5jbGFzc0xpc3QuYWRkKGljb25BY3RpdmUpO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICBibG9ja3NbaV0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbi8vICAgICAgICAgICBibG9ja3NbaV0uY2xhc3NMaXN0LnJlbW92ZShibG9ja0FjdGl2ZSk7XHJcbi8vICAgICAgICAgICBpY29uW2ldLmNsYXNzTGlzdC5yZW1vdmUoaWNvbkFjdGl2ZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=