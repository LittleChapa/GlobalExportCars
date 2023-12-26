/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/scripts/burger.js ***!
  \*******************************/
const list = document.querySelector('#list');
const burger = document.querySelector('#burger');
const listItem = document.querySelectorAll('.header__list-item');
const logoMobile = document.querySelector('.header__mobile-link');
const listItems = Array.from(listItem);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9idXJnZXIuNDhiMjRjNmY2ODRlYzE5MjA4NWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NjcmlwdHMvYnVyZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyJyk7XHJcbmNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbGlzdC1pdGVtJyk7XHJcbmNvbnN0IGxvZ29Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tb2JpbGUtbGluaycpO1xyXG5jb25zdCBsaXN0SXRlbXMgPSBBcnJheS5mcm9tKGxpc3RJdGVtKTtcclxubGlzdEl0ZW1zLnVuc2hpZnQobG9nb01vYmlsZSk7XHJcblxyXG5saXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIG9uQnVyZ2VyKGl0ZW0pO1xyXG59KTtcclxub25CdXJnZXIoYnVyZ2VyKTtcclxuZnVuY3Rpb24gb25CdXJnZXIoZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoKGVsZW1lbnQgPT0gbG9nb01vYmlsZSAmJiAhYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19idXJnZXJfYWN0aXZlJykpIHx8IHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2J1cmdlcl9hY3RpdmUnKTtcclxuICAgIGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19saXN0X2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==