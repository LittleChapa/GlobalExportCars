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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9kcm9wRG93bkxpc3QuZmVkNmFiMjgyODYyZjRjZjFiZjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zY3JpcHRzL2Ryb3BEb3duTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyDQmtCw0YLQsNC70L7QsyDQsNCy0YLQvtC80L7QsdC40LvQtdC5XHJcbi8vIGNvbnN0IGNhdGFsb2dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fbGlzdCcpO1xyXG4vLyBjb25zdCBjYXRhbG9nTGlzdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX2xpc3Qtc2VsZWN0ZWQnKTtcclxuLy8gY29uc3QgY2F0YWxvZ0Ryb3BEb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19saXN0LXNlbGVjdCcpO1xyXG4vLyBjb25zdCBjYXRhbG9nTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2xpc3QtaXRlbScpO1xyXG4vLyBjb25zdCBjYXRhbG9nTGlzdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGFsb2ctZHJvcGRvd24tbGlzdC1hcnJvdycpO1xyXG5cclxuZnVuY3Rpb24gZHJvcERvd25MaXN0KFxyXG4gIGJ1dHRvbixcclxuICBkcm9wRG93bkxpc3QsXHJcbiAgYXJyb3csXHJcbiAgYXJyYXlMaXN0LFxyXG4gIHNlbGVjdGVkLFxyXG4gIGRyb3BEb3duTGlzdENsYXNzTmFtZSxcclxuICBhcnJvd0NsYXNzTmFtZSxcclxuICBhcnJheUxpc3RDbGFzc05hbWVcclxuKSB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJvcERvd25MaXN0LmNsYXNzTGlzdC50b2dnbGUoZHJvcERvd25MaXN0Q2xhc3NOYW1lKTtcclxuICAgIGFycm93LmNsYXNzTGlzdC50b2dnbGUoYXJyb3dDbGFzc05hbWUpO1xyXG4gIH0pO1xyXG4gIGFycmF5TGlzdC5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xyXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGFycmF5TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGFycmF5TGlzdENsYXNzTmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKGFycmF5TGlzdENsYXNzTmFtZSk7XHJcbiAgICAgIHNlbGVjdGVkLmlubmVyVGV4dCA9IGxpc3RJdGVtLmlubmVyVGV4dDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBkcm9wRG93bkxpc3QoXHJcbi8vICAgY2F0YWxvZ0J1dHRvbixcclxuLy8gICBjYXRhbG9nRHJvcERvd25MaXN0LFxyXG4vLyAgIGNhdGFsb2dMaXN0QXJyb3csXHJcbi8vICAgY2F0YWxvZ0xpc3RJdGVtcyxcclxuLy8gICBjYXRhbG9nTGlzdFNlbGVjdGVkLFxyXG4vLyAgICdjYXRhbG9nX19saXN0LXNlbGVjdF9hY3RpdmUnLFxyXG4vLyAgICdjYXRhbG9nX19saXN0LWFycm93X2FjdGl2ZScsXHJcbi8vICAgJ2NhdGFsb2dfX2xpc3QtaXRlbV9zZWxlY3RlZCdcclxuLy8gKTtcclxuXHJcbi8vINCe0YLQv9GA0LDQstC40YLRjCDQt9Cw0Y/QstC60YNcclxuY29uc3QgZmVlZGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2Zvcm0tbGlzdCcpO1xyXG5jb25zdCBmZWVkYmFja0xpc3RTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fZm9ybS1saXN0LXNlbGVjdGVkJyk7XHJcbmNvbnN0IGZlZWRiYWNrRHJvcERvd25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19mb3JtLWxpc3Qtc2VsZWN0Jyk7XHJcbmNvbnN0IGZlZWRiYWNrTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlZWRiYWNrX19mb3JtLWxpc3QtaXRlbScpO1xyXG5jb25zdCBmZWVkYmFja0xpc3RBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVkYmFjay1kcm9wZG93bi1saXN0LWFycm93Jyk7XHJcblxyXG5kcm9wRG93bkxpc3QoXHJcbiAgZmVlZGJhY2tCdXR0b24sXHJcbiAgZmVlZGJhY2tEcm9wRG93bkxpc3QsXHJcbiAgZmVlZGJhY2tMaXN0QXJyb3csXHJcbiAgZmVlZGJhY2tMaXN0SXRlbXMsXHJcbiAgZmVlZGJhY2tMaXN0U2VsZWN0ZWQsXHJcbiAgJ2ZlZWRiYWNrX19mb3JtLWxpc3Qtc2VsZWN0X2FjdGl2ZScsXHJcbiAgJ2ZlZWRiYWNrX19mb3JtLWxpc3QtYXJyb3dfYWN0aXZlJyxcclxuICAnZmVlZGJhY2tfX2Zvcm0tbGlzdC1pdGVtX3NlbGVjdGVkJ1xyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=