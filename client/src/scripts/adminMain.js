import { getMain, updateMain } from '../http/mainAPI';
import toastr from 'toastr';

const adminMainButton = document.querySelector('#adminMainButton');
const adminMainImage = document.querySelector('#adminMainImage');
const adminMainImageInput = document.querySelector('#mainBg');
const adminMainTitle = document.querySelector('#adminMainTitle');
const adminMainDescr = document.querySelector('#adminMainDescr');
let image;
let adminTitle = adminMainTitle.value;
let adminDescr = adminMainDescr.value;

toastr.options = {
  positionClass: 'toast-top-right',
  progressBar: true,
  timeOut: '3000',
};

getMain(1)
  .then((data) => {
    adminMainImage.src = `${process.env.APP_API_URL}/${data.img}`;
    adminMainTitle.innerText = data.title;
    adminMainDescr.innerText = data.descr;
    // image = data.img;
    // console.log(image);
  })
  .then(() => {
    adminMainImageInput.addEventListener('input', (e) => {
      image = e.target.files[0];
      if (image) {
        const reader = new FileReader();

        reader.onload = function (event) {
          // Устанавливаем data URL как источник предпросмотра изображения
          adminMainImage.src = event.target.result;
        };

        // Читаем содержимое файла в виде data URL
        reader.readAsDataURL(image);
      }
    });
  });

adminMainButton.addEventListener('click', (e) => {
  e.preventDefault();
  getMain(1).then((data) => {
    if (
      process.env.APP_API_URL + '/' + data.img === adminMainImage.src &&
      data.title === adminMainTitle.value &&
      data.descr === adminMainDescr.value
    ) {
      toastr.error('Вы ничего не изменили!');
      return 0;
    } else {
      const formData = new FormData();
      formData.append('title', adminMainTitle.value);
      formData.append('descr', adminMainDescr.value);
      formData.append('img', image);
      console.log(formData);
      console.log(image);
      updateMain(1, formData)
        .then((data) => {
          console.log(data);
          return data;
        })
        .then((data) => {
          adminMainImage.src = process.env.APP_API_URL + '/' + data.img;
          toastr.success('Изменения сохранены успешно!');
        });
    }
  });
});
