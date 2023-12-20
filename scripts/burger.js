const list = document.querySelector('#list');
const burger = document.querySelector('#burger');
const listItem = document.querySelectorAll('.header__list-item');
const logo = document.querySelector('.header__mobile-link');

const listItems = Array.from(listItem);

listItems.unshift(logo);

listItems.forEach((item) => {
  onBurger(item);
});
onBurger(burger);

function onBurger(element) {
  element.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active');
    list.classList.toggle('header__list_active');
    document.body.classList.toggle('noscroll');
  });
}
