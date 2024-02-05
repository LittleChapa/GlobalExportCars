import toastr from 'toastr';
import { onModal } from './adminModal';
import { createService, getAllService, removeService, updateService } from '../http/servicesAPI';
import { check } from '../http/userAPI';
const servicesModalButton = document.querySelector('#servicesButton');
const servicesModal = document.querySelector('.admin-services-modal');
const servicesModalForm = document.querySelector('.admin-services-modal__form');

const servicesModalTitle = document.querySelector('#serviceModalTitle');
const servicesModalDescr = document.querySelector('#serviceModalDescr');
const servicesModalPrice = document.querySelector('#serviceModalPrice');
const servicesModalAdd = document.querySelector('#serviceModalAdd');
const listContainer = document.querySelector('.admin-services__list');

check().catch(() => {
  window.location.replace(window.location.origin + '/admin/');
})

servicesModalAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (!servicesModalTitle.value || !servicesModalDescr.value || !servicesModalPrice.value) {
    toastr.error('Вы заполнили не все поля!');
    return;
  }
  listContainer.innerHTML = '';
  servicesModal.classList.toggle('admin-services-modal_active');
  document.body.classList.toggle('noscroll');
  createService(servicesModalTitle.value, servicesModalDescr.value, servicesModalPrice.value).then(() => {
    servicesModalTitle.value = '';
    servicesModalDescr.value = '';
    servicesModalPrice.value = '';
    toastr.success('Услуга успешно добавлена!');

    getAllService().then((data) => {
      data.sort(function (a, b) {
        return a.id - b.id;
      });
      data.forEach((item) => {
        // Создаем элемент

        let listItem = document.createElement('li');
        listItem.className = 'admin-services__list-item';
        listItem.id = item.id;
        console.log(listItem.id);
        let form = document.createElement('form');
        form.action = '';
        form.className = 'admin-services__form';

        // Заголовок
        let titleFormItem = createFormItem('Заголовок', item.title, 'text');
        form.appendChild(titleFormItem);
        let inputTitleElement = titleFormItem.querySelector('.admin-services__form-item-input');

        // Текст
        let textFormItem = createFormItem('Текст', item.descr, 'textarea');
        form.appendChild(textFormItem);
        let inputTextElement = textFormItem.querySelector('.admin-services__form-item-input-text');

        // Цена
        let priceFormItem = createFormItem('Цена', item.price, 'text');
        form.appendChild(priceFormItem);
        let inputPriceElement = priceFormItem.querySelector('.admin-services__form-item-input');

        // Кнопки
        let buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'admin-services__form-buttons';

        let saveButton = document.createElement('button');
        saveButton.className = 'button admin-services__form-buttons-item';
        saveButton.textContent = 'Сохранить';
        saveButton.addEventListener('click', (e) => {
          e.preventDefault();
          if (
            item.title === inputTitleElement.value &&
            item.descr === inputTextElement.value &&
            item.price === inputPriceElement.value
          ) {
            toastr.error('Вы ничего не изменили!');
            return;
          }
          updateService(item.id, inputTitleElement.value, inputTextElement.value, inputPriceElement.value)
            .then((data) => {
              console.log(data);
              toastr.success('Изменения сохранены успешно!');
            })
            .catch((err) => {
              console.log(err);
            });
        });

        let deleteButton = document.createElement('button');
        deleteButton.className = 'button admin-services__form-buttons-item admin-services__form-buttons-item_red-bg';
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', (e) => {
          e.preventDefault();
          removeService(item.id).then((data) => {
            toastr.success('Услуга успешно удалена!');
            listItem.remove();
          });
        });

        buttonsContainer.appendChild(saveButton);
        buttonsContainer.appendChild(deleteButton);

        form.appendChild(buttonsContainer);

        listItem.appendChild(form);

        listContainer.appendChild(listItem);
      });
      // Создаем элемент
    });
  });
});

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
  data.sort(function (a, b) {
    return a.id - b.id;
  });
  data.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.className = 'admin-services__list-item';
    listItem.id = item.id;
    console.log(listItem.id);
    let form = document.createElement('form');
    form.action = '';
    form.className = 'admin-services__form';

    // Заголовок
    let titleFormItem = createFormItem('Заголовок', item.title, 'text');
    form.appendChild(titleFormItem);
    let inputTitleElement = titleFormItem.querySelector('.admin-services__form-item-input');

    // Текст
    let textFormItem = createFormItem('Текст', item.descr, 'textarea');
    form.appendChild(textFormItem);
    let inputTextElement = textFormItem.querySelector('.admin-services__form-item-input-text');

    // Цена
    let priceFormItem = createFormItem('Цена', item.price, 'text');
    form.appendChild(priceFormItem);
    let inputPriceElement = priceFormItem.querySelector('.admin-services__form-item-input');

    // Кнопки
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'admin-services__form-buttons';

    let saveButton = document.createElement('button');
    saveButton.className = 'button admin-services__form-buttons-item';
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        item.title === inputTitleElement.value &&
        item.descr === inputTextElement.value &&
        item.price === inputPriceElement.value
      ) {
        toastr.error('Вы ничего не изменили!');
        return;
      }
      updateService(item.id, inputTitleElement.value, inputTextElement.value, inputPriceElement.value)
        .then((data) => {
          console.log(data);
          toastr.success('Изменения сохранены успешно!');
        })
        .catch((err) => {
          console.log(err);
        });
    });

    let deleteButton = document.createElement('button');
    deleteButton.className = 'button admin-services__form-buttons-item admin-services__form-buttons-item_red-bg';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      removeService(item.id).then((data) => {
        toastr.success('Услуга успешно удалена!');
        listItem.remove();
      });
    });

    buttonsContainer.appendChild(saveButton);
    buttonsContainer.appendChild(deleteButton);

    form.appendChild(buttonsContainer);

    listItem.appendChild(form);

    listContainer.appendChild(listItem);
  });
  // Создаем элемент
});
