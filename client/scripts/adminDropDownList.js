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
