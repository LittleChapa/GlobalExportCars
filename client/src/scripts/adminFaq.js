import toastr from 'toastr';
import { onModal } from './adminModal';
import { createFaq, getAllFaq, removeFaq, updateFaq } from '../http/faqAPI';
const faqModalButton = document.querySelector('#faqButton');
const faqModal = document.querySelector('.admin-faq-modal');
const faqModalForm = document.querySelector('.admin-faq-modal__form');
const faqList = document.querySelector('.admin-faq__list');

const faqModalTitle = document.querySelector('#faqModalTitle');
const faqModalDescr = document.querySelector('#faqModalDescr');
const faqModalAdd = document.querySelector('#faqModalAdd');

check().catch(() => {
  window.location.replace(window.location.origin + '/admin/');
})

faqModalAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (!faqModalTitle.value || !faqModalDescr.value) {
    toastr.error('Вы заполнили не все поля!');
    return;
  }
  faqList.innerHTML = '';
  faqModal.classList.toggle('admin-faq-modal_active');
  document.body.classList.toggle('noscroll');
  createFaq(faqModalTitle.value, faqModalDescr.value).then(() => {
    faqModalTitle.value = '';
    faqModalDescr.value = '';
    toastr.success('Услуга успешно добавлена!');

    getAllFaq().then((data) => {
      data.forEach((item) => {
        // Создаем элемент li с классом "admin-faq__list-item"
        let listItem = document.createElement('li');
        listItem.className = 'admin-faq__list-item';

        // Создаем форму с классом "admin-faq__form"
        let form = document.createElement('form');
        form.action = '';
        form.className = 'admin-faq__form';

        // Создаем первый элемент формы (Заголовок)
        let titleLabel = document.createElement('label');
        titleLabel.className = 'admin-faq__form-item';
        let titleElement = document.createElement('h3');
        titleElement.className = 'admin-faq__form-item-title';
        titleElement.textContent = 'Заголовок';
        let titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = item.title;
        titleInput.className = 'input admin-faq__form-item-input';
        titleLabel.appendChild(titleElement);
        titleLabel.appendChild(titleInput);

        // Создаем второй элемент формы (Текст)
        let textLabel = document.createElement('label');
        textLabel.className = 'admin-faq__form-item';
        let textElement = document.createElement('h3');
        textElement.className = 'admin-faq__form-item-title';
        textElement.textContent = 'Текст';
        let textArea = document.createElement('textarea');
        textArea.name = '';
        textArea.id = '';
        textArea.className = 'input admin-faq__form-item-input admin-faq__form-item-input-text';
        textArea.textContent = item.descr;
        textLabel.appendChild(textElement);
        textLabel.appendChild(textArea);

        // Создаем блок с кнопками формы
        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'admin-faq__form-buttons';
        let saveButton = document.createElement('button');
        saveButton.className = 'button admin-faq__form-buttons-item';
        saveButton.textContent = 'Сохранить';
        saveButton.addEventListener('click', (e) => {
          e.preventDefault();
          if (item.title === titleInput.value && item.descr === textArea.value) {
            toastr.error('Вы ничего не изменили!');
            return;
          }
          updateFaq(item.id, titleInput.value, textArea.value)
            .then((data) => {
              console.log(data);
              toastr.success('Изменения сохранены успешно!');
            })
            .catch((err) => {
              console.log(err);
            });
        });

        let deleteButton = document.createElement('button');
        deleteButton.className = 'button admin-faq__form-buttons-item admin-faq__form-buttons-item_red-bg';
        deleteButton.textContent = 'Удалить';
        buttonsDiv.appendChild(saveButton);
        buttonsDiv.appendChild(deleteButton);
        deleteButton.addEventListener('click', (e) => {
          e.preventDefault();
          removeFaq(item.id).then((data) => {
            toastr.success('Вопрос успешно удален!');
            listItem.remove();
          });
        });

        // Добавляем все созданные элементы в форму
        form.appendChild(titleLabel);
        form.appendChild(textLabel);
        form.appendChild(buttonsDiv);

        // Добавляем форму в элемент li
        listItem.appendChild(form);

        // Добавляем элемент li в DOM, например, внутрь элемента с id "faq-list"
        faqList.appendChild(listItem);
      });
    });
  });
});

onModal(faqModalButton, faqModal, 'admin-faq-modal_active', faqModalForm);

getAllFaq().then((data) => {
  data.forEach((item) => {
    // Создаем элемент li с классом "admin-faq__list-item"
    let listItem = document.createElement('li');
    listItem.className = 'admin-faq__list-item';

    // Создаем форму с классом "admin-faq__form"
    let form = document.createElement('form');
    form.action = '';
    form.className = 'admin-faq__form';

    // Создаем первый элемент формы (Заголовок)
    let titleLabel = document.createElement('label');
    titleLabel.className = 'admin-faq__form-item';
    let titleElement = document.createElement('h3');
    titleElement.className = 'admin-faq__form-item-title';
    titleElement.textContent = 'Заголовок';
    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = item.title;
    titleInput.className = 'input admin-faq__form-item-input';
    titleLabel.appendChild(titleElement);
    titleLabel.appendChild(titleInput);

    // Создаем второй элемент формы (Текст)
    let textLabel = document.createElement('label');
    textLabel.className = 'admin-faq__form-item';
    let textElement = document.createElement('h3');
    textElement.className = 'admin-faq__form-item-title';
    textElement.textContent = 'Текст';
    let textArea = document.createElement('textarea');
    textArea.name = '';
    textArea.id = '';
    textArea.className = 'input admin-faq__form-item-input admin-faq__form-item-input-text';
    textArea.textContent = item.descr;
    textLabel.appendChild(textElement);
    textLabel.appendChild(textArea);

    // Создаем блок с кнопками формы
    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'admin-faq__form-buttons';
    let saveButton = document.createElement('button');
    saveButton.className = 'button admin-faq__form-buttons-item';
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (item.title === titleInput.value && item.descr === textArea.value) {
        toastr.error('Вы ничего не изменили!');
        return;
      }
      updateFaq(item.id, titleInput.value, textArea.value)
        .then((data) => {
          console.log(data);
          toastr.success('Изменения сохранены успешно!');
        })
        .catch((err) => {
          console.log(err);
        });
    });

    let deleteButton = document.createElement('button');
    deleteButton.className = 'button admin-faq__form-buttons-item admin-faq__form-buttons-item_red-bg';
    deleteButton.textContent = 'Удалить';
    buttonsDiv.appendChild(saveButton);
    buttonsDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      removeFaq(item.id).then((data) => {
        toastr.success('Вопрос успешно удален!');
        listItem.remove();
      });
    });

    // Добавляем все созданные элементы в форму
    form.appendChild(titleLabel);
    form.appendChild(textLabel);
    form.appendChild(buttonsDiv);

    // Добавляем форму в элемент li
    listItem.appendChild(form);

    // Добавляем элемент li в DOM, например, внутрь элемента с id "faq-list"
    faqList.appendChild(listItem);
  });
});
