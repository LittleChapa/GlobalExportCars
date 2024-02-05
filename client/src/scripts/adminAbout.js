import toastr from 'toastr';
import { getAllAbout, updateAbout } from '../http/aboutAPI';

const adminAboutInput = document.querySelectorAll('.admin-about__form-item-input');
const adminAboutButtons = document.querySelectorAll('.admin-about__form-button');

toastr.options = {
  positionClass: 'toast-top-right',
  progressBar: true,
  timeOut: '3000',
};

getAllAbout()
  .then((data) => {
    const newData = data.sort(function (a, b) {
      return a.id - b.id;
    });
    adminAboutInput.forEach((item, index) => {
      item.value = newData[index].text;
    });
    return newData;
  })
  .then((data) => {
    adminAboutButtons.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (data[index].text === adminAboutInput[index].value) {
          toastr.error('Вы ничего не изменили!');
          return;
        }
        updateAbout(index + 1, adminAboutInput[index].value).then((data) => {
          toastr.success('Изменения сохранены успешно!');
        });
      });
    });
  });
