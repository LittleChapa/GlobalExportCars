/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/anchorLink.js ***!
  \***********************************/
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.header__list-item');
const button = document.querySelector('#button');
const feedback = document.querySelector('.feedback');
const arrayLinks = Array.from(links);
const arraySections = Array.from(sections);
const logo = document.querySelector('.header__list-link-logo');
const logoMobile = document.querySelector('.header__mobile-link');

const newArraySections = arraySections.filter((item, i) => {
  return i !== 2;
});

if (window.innerWidth <= 768) {
  arrayLinks.unshift(logoMobile);
} else {
  arrayLinks.unshift(logo);
}

if (arrayLinks.length >= 2) {
  let temp = arrayLinks[arrayLinks.length - 1];
  arrayLinks[arrayLinks.length - 1] = arrayLinks[arrayLinks.length - 2];
  arrayLinks[arrayLinks.length - 2] = temp;
  console.log(arrayLinks);
}

function anchorLink(element) {
  const offset = element.getBoundingClientRect();
  const windowTop = window.pageYOffset;

  window.scrollTo(0, windowTop + offset.top - 70);
}

button.addEventListener('click', () => {
  anchorLink(feedback);
});

for (let i = 0; i < arrayLinks.length; i++) {
  arrayLinks[i].addEventListener('click', () => {
    anchorLink(newArraySections[i]);
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9hbmNob3JMaW5rLmU3ZjNmMTdiNzYyOTljZmM0YjBjLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvc2NyaXB0cy9hbmNob3JMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX2xpc3QtaXRlbScpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uJyk7XHJcbmNvbnN0IGZlZWRiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrJyk7XHJcbmNvbnN0IGFycmF5TGlua3MgPSBBcnJheS5mcm9tKGxpbmtzKTtcclxuY29uc3QgYXJyYXlTZWN0aW9ucyA9IEFycmF5LmZyb20oc2VjdGlvbnMpO1xyXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbGlzdC1saW5rLWxvZ28nKTtcclxuY29uc3QgbG9nb01vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21vYmlsZS1saW5rJyk7XHJcblxyXG5jb25zdCBuZXdBcnJheVNlY3Rpb25zID0gYXJyYXlTZWN0aW9ucy5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuICByZXR1cm4gaSAhPT0gMjtcclxufSk7XHJcblxyXG5pZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XHJcbiAgYXJyYXlMaW5rcy51bnNoaWZ0KGxvZ29Nb2JpbGUpO1xyXG59IGVsc2Uge1xyXG4gIGFycmF5TGlua3MudW5zaGlmdChsb2dvKTtcclxufVxyXG5cclxuaWYgKGFycmF5TGlua3MubGVuZ3RoID49IDIpIHtcclxuICBsZXQgdGVtcCA9IGFycmF5TGlua3NbYXJyYXlMaW5rcy5sZW5ndGggLSAxXTtcclxuICBhcnJheUxpbmtzW2FycmF5TGlua3MubGVuZ3RoIC0gMV0gPSBhcnJheUxpbmtzW2FycmF5TGlua3MubGVuZ3RoIC0gMl07XHJcbiAgYXJyYXlMaW5rc1thcnJheUxpbmtzLmxlbmd0aCAtIDJdID0gdGVtcDtcclxuICBjb25zb2xlLmxvZyhhcnJheUxpbmtzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5jaG9yTGluayhlbGVtZW50KSB7XHJcbiAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCB3aW5kb3dUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3dUb3AgKyBvZmZzZXQudG9wIC0gNzApO1xyXG59XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYW5jaG9yTGluayhmZWVkYmFjayk7XHJcbn0pO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgYXJyYXlMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFuY2hvckxpbmsobmV3QXJyYXlTZWN0aW9uc1tpXSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9