import toastr from 'toastr';
import { onModal } from './adminModal';
import { getAllCatalog, removeCatalog, updateCatalog } from '../http/catalogAPI';
import { getAllCountry } from '../http/countryAPI';
const catalogModalButton = document.querySelector('#catalogButton');
const catalogModal = document.querySelector('.admin-catalog-modal');
const catalogModalForm = document.querySelector('.admin-catalog-modal__form');
const adminCatalogList = document.querySelector('.admin-catalog__list');

const catalogButton = document.querySelector('.catalog__list');
const catalogListSelected = document.querySelector('.catalog__list-selected');
const catalogDropDownList = document.querySelector('.catalog__list-select');
const catalogListArrow = document.querySelector('#catalog-dropdown-list-arrow');

let catalogSpanCountryId = 1;

toastr.options = {
  positionClass: 'toast-top-right',
  progressBar: true,
  timeOut: '3000',
};

onModal(catalogModalButton, catalogModal, 'admin-catalog-modal_active', catalogModalForm);
function createTextInput(value, placeholder, inputClass) {
  let input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  input.placeholder = placeholder;
  input.className = `input admin-catalog__form-input ${inputClass}`;
  return input;
}

catalogButton.addEventListener('click', () => {
  catalogDropDownList.classList.toggle('catalog__list-select_active');
  catalogListArrow.classList.toggle('catalog__list-arrow_active');
});

getAllCountry().then((data) => {
  catalogListSelected.innerText = data[0].name;
  catalogSpanCountryId = catalogListSelected.attributes.countryId.value;
  data.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.className = 'catalog__list-item';
    listItem.id = item.id;
    listItem.innerText = item.name;
    catalogDropDownList.appendChild(listItem);
    const catalogListItems = document.querySelectorAll('.catalog__list-item');
    catalogListItems.forEach((listItem) => {
      listItem.addEventListener('click', () => {
        catalogSpanCountryId = listItem.id;
        console.log(catalogSpanCountryId);
        catalogListItems.forEach((item) => {
          item.classList.remove('catalog__list-item_selected');
        });
        listItem.classList.add('catalog__list-item_selected');
        catalogListSelected.innerText = listItem.innerText;
      });
    });
  });
});

getAllCatalog()
  .then((data) => {
    const newData = data.sort(function (a, b) {
      return a.id - b.id;
    });
    for (let i = 0; i < newData.length; i++) {
      let listItem = document.createElement('li');
      listItem.className = 'admin-catalog__list-item';

      let form = document.createElement('form');
      form.className = 'admin-catalog__form';
      form.action = './adminPanel.html';
      form.method = 'get';

      let label = document.createElement('label');
      label.htmlFor = `newCatalogCard${i}`;
      label.className = 'admin-catalog__form-image admin-catalog__form-image-label';

      let fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.name = 'newCatalogCard';
      fileInput.className = 'admin-catalog__file-input';
      fileInput.id = `newCatalogCard${i}`;

      let image = document.createElement('img');
      image.className = 'admin-catalog__form-image-item';
      image.alt = '';

      // fileInput.addEventListener("input", (e) => {
      //   index = i;
      // });

      let buttonSpan = document.createElement('span');
      buttonSpan.className = 'admin-catalog__form-button';
      buttonSpan.textContent = 'Изменить фото';

      let buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'admin-catalog__form-buttons';

      let saveButton = document.createElement('button');
      saveButton.className = 'button admin-catalog__form-buttons-item catalog-card-save-button';
      saveButton.textContent = 'Сохранить';

      let deleteButton = document.createElement('button');
      deleteButton.className =
        'button admin-catalog__form-buttons-item admin-catalog__form-buttons-item_red-bg catalog-card-delete-button';
      deleteButton.textContent = 'Удалить';

      image.src = process.env.APP_API_URL + newData[i].img;
      label.appendChild(image);
      label.appendChild(fileInput);
      label.appendChild(buttonSpan);

      let input1 = createTextInput(newData[i].title, 'Марка, модель', 'catalog-card-input-title');
      let input2 = createTextInput(newData[i].descr, 'Год выпуска', 'catalog-card-input-descr');
      let input3 = createTextInput(
        newData[i].characteristic,
        'Основные характеристики',
        'catalog-card-input-characteristic'
      );
      let input4 = createTextInput(newData[i].drive, 'Привод', 'catalog-card-input-drive');

      // Добавляем кнопки в блок
      buttonsDiv.appendChild(saveButton);
      buttonsDiv.appendChild(deleteButton);

      form.appendChild(label);
      form.appendChild(input1);
      form.appendChild(input2);
      form.appendChild(input3);
      form.appendChild(input4);
      form.appendChild(buttonsDiv);

      listItem.appendChild(form);

      adminCatalogList.appendChild(listItem);
    }
    return data;
  })
  .then((data) => {
    const catalogItem = document.querySelectorAll('.admin-catalog__list-item');
    const catalogImage = document.querySelectorAll('.admin-catalog__form-image-item');
    const catalogCardTitle = document.querySelectorAll('.catalog-card-input-title');
    const catalogCardDescr = document.querySelectorAll('.catalog-card-input-descr');
    const catalogCardCharacteristic = document.querySelectorAll('.catalog-card-input-characteristic');
    const catalogCardDrive = document.querySelectorAll('.catalog-card-input-drive');
    const catalogCardSaveButton = document.querySelectorAll('.catalog-card-save-button');
    const catalogCardDeleteButton = document.querySelectorAll('.catalog-card-delete-button');

    let imageLabel = [];
    catalogImage.forEach((item, i) => {
      imageLabel.push(data[i].img);
      console.log(imageLabel);
      let catalogImageInput = document.querySelector(`#newCatalogCard${i}`);
      catalogImageInput.addEventListener('input', (e) => {
        imageLabel[i] = e.target.files[0];
        console.log(imageLabel);
        console.log(item);
        if (imageLabel[i]) {
          const reader = new FileReader();

          reader.onload = function (event) {
            // Устанавливаем data URL как источник предпросмотра изображения
            catalogImage[i].src = event.target.result;
          };

          // Читаем содержимое файла в виде data URL

          reader.readAsDataURL(imageLabel[i]);
        }
      });

      catalogCardSaveButton.forEach((item, t) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append('title', catalogCardTitle[t].value);
          formData.append('descr', catalogCardDescr[t].value);
          formData.append('characteristic', catalogCardCharacteristic[t].value);
          formData.append('drive', catalogCardDrive[t].value);
          formData.append('img', imageLabel[t]);
          formData.append('countryId', catalogSpanCountryId);

          if (
            data[t].title === catalogCardTitle[t].value &&
            data[t].descr === catalogCardDescr[t].value &&
            data[t].characteristic === catalogCardCharacteristic[t].value &&
            data[t].drive === catalogCardDrive[t].value &&
            data[t].img === imageLabel[t] &&
            i === t
          ) {
            toastr.error('Вы ничего не изменили!');
            return;
          }
          updateCatalog(data[t].id, formData).then((data) => {
            if (i === t) {
              toastr.success('Изменения сохранены успешно!');
            }
          });
        });
      });

      catalogCardDeleteButton.forEach((item, t) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          removeCatalog(data[t].id).then(catalogItem[t].remove());
        });
      });
    });
  });
