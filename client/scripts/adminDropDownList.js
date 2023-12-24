// Админ панель - Заявки

const applicationsListItems = document.querySelectorAll('.applications__list-item');
const applicationsListInners = document.querySelectorAll('.applications__list-inner');
const applicationsListArrows = document.querySelectorAll('#applications-dropdown-list-arrow');
const applicationsListButtons = document.querySelectorAll('.applications__list-item-text-button');

applicationsListItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    applicationsListItems.forEach((otherItem) => {
      otherItem.classList.toggle('applications__list-item_disabled');
    });
    item.classList.toggle('applications__list-item_disabled');
    applicationsListInners[i].classList.toggle('applications__list-inner_active');
    applicationsListArrows[i].classList.toggle('applications__list-item-icon_active');
    applicationsListButtons[i].classList.toggle('applications__list-item-text-button_active');
  });
});
