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
// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', () => {
//     listItems.forEach((item) => {
//       item.classList.remove('catalog__list-item_selected');
//     });
//     listItem.classList.add('catalog__list-item_selected');
//     listSelected.innerText = listItem.innerText;
//   });
// });
