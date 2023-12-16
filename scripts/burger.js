const list = document.querySelector('#list');
const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active');
  list.classList.toggle('header__list_active');
});
