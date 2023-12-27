import { onModal } from "./adminModal";
import { getAllCatalog } from "../http/catalogAPI";
const catalogModalButton = document.querySelector("#catalogButton");
const catalogModal = document.querySelector(".admin-catalog-modal");
const catalogModalForm = document.querySelector(".admin-catalog-modal__form");
const adminCatalogList = document.querySelector(".admin-catalog__list");
let imageLabel;
let index = 0;
onModal(
  catalogModalButton,
  catalogModal,
  "admin-catalog-modal_active",
  catalogModalForm
);
function createTextInput(value, placeholder) {
  let input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = placeholder;
  input.className = "input admin-catalog__form-input";
  return input;
}

getAllCatalog()
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let listItem = document.createElement("li");
      listItem.className = "admin-catalog__list-item";

      let form = document.createElement("form");
      form.className = "admin-catalog__form";
      form.action = "./adminPanel.html";
      form.method = "get";

      let label = document.createElement("label");
      label.htmlFor = `newCatalogCard${i}`;
      label.className =
        "admin-catalog__form-image admin-catalog__form-image-label";

      let fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.name = "newCatalogCard";
      fileInput.className = "admin-catalog__file-input";
      fileInput.id = `newCatalogCard${i}`;

      let image = document.createElement("img");
      image.className = "admin-catalog__form-image-item";
      image.alt = "";

      // fileInput.addEventListener("input", (e) => {
      //   index = i;
      // });

      let buttonSpan = document.createElement("span");
      buttonSpan.className = "admin-catalog__form-button";
      buttonSpan.textContent = "Изменить фото";

      let buttonsDiv = document.createElement("div");
      buttonsDiv.className = "admin-catalog__form-buttons";

      let saveButton = document.createElement("button");
      saveButton.className = "button admin-catalog__form-buttons-item";
      saveButton.textContent = "Сохранить";

      let deleteButton = document.createElement("button");
      deleteButton.className =
        "button admin-catalog__form-buttons-item admin-catalog__form-buttons-item_red-bg";
      deleteButton.textContent = "Удалить";

      image.src = process.env.APP_API_URL + data[i].img;
      label.appendChild(image);
      label.appendChild(fileInput);
      label.appendChild(buttonSpan);

      let input1 = createTextInput(data[i].title, "Марка, модель");
      let input2 = createTextInput(data[i].descr, "Год выпуска");
      let input3 = createTextInput(
        data[i].characteristic,
        "Основные характеристики"
      );
      let input4 = createTextInput(data[i].drive, "Привод");

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
  })
  .then(() => {
    const catalogImage = document.querySelectorAll(
      ".admin-catalog__form-image-item"
    );

    catalogImage.forEach((item, i) => {
      let catalogImageInput = document.querySelector(`#newCatalogCard${i}`);

      catalogImageInput.addEventListener("input", (e) => {
        imageLabel = e.target.files[0];
        console.log(item);
        if (imageLabel) {
          const reader = new FileReader();

          reader.onload = function (event) {
            // Устанавливаем data URL как источник предпросмотра изображения
            catalogImage[i].src = event.target.result;
          };

          // Читаем содержимое файла в виде data URL
          reader.readAsDataURL(imageLabel);
        }
      });
    });
  });
