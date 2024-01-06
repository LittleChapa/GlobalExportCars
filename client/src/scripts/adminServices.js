import toastr from 'toastr';
import { onModal } from './adminModal';
import { getAllService } from '../http/servicesAPI';
const servicesModalButton = document.querySelector('#servicesButton');
const servicesModal = document.querySelector('.admin-services-modal');
const servicesModalForm = document.querySelector('.admin-services-modal__form');

onModal(servicesModalButton, servicesModal, 'admin-services-modal_active', servicesModalForm);

function createFormItem(title, value, inputType) {
  var formItem = document.createElement('label');
  formItem.className = 'admin-services__form-item';

  var titleElement = document.createElement('h3');
  titleElement.className = 'admin-services__form-item-title';
  titleElement.textContent = title;

  var inputElement = document.createElement(inputType === 'textarea' ? 'textarea' : 'input');
  if (inputType === 'textarea') {
    inputElement.textContent = value;
    inputElement.className = 'input admin-services__form-item-input admin-services__form-item-input-text';
  } else {
    inputElement.type = inputType;
    inputElement.value = value;
    inputElement.className = 'input admin-services__form-item-input';
  }

  formItem.appendChild(titleElement);
  formItem.appendChild(inputElement);

  return formItem;
}

getAllService().then((data) => {
  data.forEach((item) => {
    // Создаем элемент
    let listContainer = document.querySelector('.admin-services__list');

    let listItem = document.createElement('li');
    listItem.className = 'admin-services__list-item';

    let form = document.createElement('form');
    form.action = '';
    form.className = 'admin-services__form';

    // Заголовок
    let titleFormItem = createFormItem('Заголовок', item.title, 'text');
    form.appendChild(titleFormItem);

    // Текст
    let textFormItem = createFormItem('Текст', item.descr, 'textarea');
    form.appendChild(textFormItem);

    // Цена
    let priceFormItem = createFormItem('Цена', item.price, 'text');
    form.appendChild(priceFormItem);

    // Кнопки
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'admin-services__form-buttons';

    let saveButton = document.createElement('button');
    saveButton.className = 'button admin-services__form-buttons-item';
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', function () {
      alert('Форма сохранена!');
    });

    let deleteButton = document.createElement('button');
    deleteButton.className = 'button admin-services__form-buttons-item admin-services__form-buttons-item_red-bg';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function () {
      alert('Форма удалена!');
    });

    buttonsContainer.appendChild(saveButton);
    buttonsContainer.appendChild(deleteButton);

    form.appendChild(buttonsContainer);

    listItem.appendChild(form);

    listContainer.appendChild(listItem);
  });
  // Создаем элемент
});
