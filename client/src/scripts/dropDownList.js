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
