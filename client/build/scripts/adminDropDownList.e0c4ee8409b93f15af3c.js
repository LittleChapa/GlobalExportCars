/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/scripts/adminDropDownList.js ***!
  \******************************************/
// Админ панель - Заявки

const applicationsListItems = document.querySelectorAll('.admin-applications__list-item');
const applicationsListInners = document.querySelectorAll('.admin-applications__list-inner');
const applicationsListArrows = document.querySelectorAll('#admin-applications-dropdown-list-arrow');
const applicationsListButtons = document.querySelectorAll('.admin-applications__list-item-text-button');

applicationsListItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    applicationsListItems.forEach((otherItem) => {
      otherItem.classList.toggle('admin-applications__list-item_disabled');
    });
    item.classList.toggle('admin-applications__list-item_disabled');
    applicationsListInners[i].classList.toggle('admin-applications__list-inner_active');
    applicationsListArrows[i].classList.toggle('admin-applications__list-item-icon_active');
    applicationsListButtons[i].classList.toggle('admin-applications__list-item-text-button_active');
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9hZG1pbkRyb3BEb3duTGlzdC5lMGM0ZWU4NDA5YjkzZjE1YWYzYy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zY3JpcHRzL2FkbWluRHJvcERvd25MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCQ0LTQvNC40L0g0L/QsNC90LXQu9GMIC0g0JfQsNGP0LLQutC4XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbnNMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRtaW4tYXBwbGljYXRpb25zX19saXN0LWl0ZW0nKTtcclxuY29uc3QgYXBwbGljYXRpb25zTGlzdElubmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZG1pbi1hcHBsaWNhdGlvbnNfX2xpc3QtaW5uZXInKTtcclxuY29uc3QgYXBwbGljYXRpb25zTGlzdEFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhZG1pbi1hcHBsaWNhdGlvbnMtZHJvcGRvd24tbGlzdC1hcnJvdycpO1xyXG5jb25zdCBhcHBsaWNhdGlvbnNMaXN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZG1pbi1hcHBsaWNhdGlvbnNfX2xpc3QtaXRlbS10ZXh0LWJ1dHRvbicpO1xyXG5cclxuYXBwbGljYXRpb25zTGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYXBwbGljYXRpb25zTGlzdEl0ZW1zLmZvckVhY2goKG90aGVySXRlbSkgPT4ge1xyXG4gICAgICBvdGhlckl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWRtaW4tYXBwbGljYXRpb25zX19saXN0LWl0ZW1fZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhZG1pbi1hcHBsaWNhdGlvbnNfX2xpc3QtaXRlbV9kaXNhYmxlZCcpO1xyXG4gICAgYXBwbGljYXRpb25zTGlzdElubmVyc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhZG1pbi1hcHBsaWNhdGlvbnNfX2xpc3QtaW5uZXJfYWN0aXZlJyk7XHJcbiAgICBhcHBsaWNhdGlvbnNMaXN0QXJyb3dzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FkbWluLWFwcGxpY2F0aW9uc19fbGlzdC1pdGVtLWljb25fYWN0aXZlJyk7XHJcbiAgICBhcHBsaWNhdGlvbnNMaXN0QnV0dG9uc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhZG1pbi1hcHBsaWNhdGlvbnNfX2xpc3QtaXRlbS10ZXh0LWJ1dHRvbl9hY3RpdmUnKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==