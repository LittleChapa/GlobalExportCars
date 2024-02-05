import toastr from 'toastr';
import { getAllApplications, updateApplications } from '../http/userAPI';

const adminApplicationsList = document.querySelector('.admin-applications__list');

getAllApplications()
  .then((data) => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });
    data.forEach((item) => {
      if (!item.archive) {
        return;
      }
      // Create list item element
      const listItem = document.createElement('li');
      listItem.className = 'admin-applications__list-item';

      // Create form element
      const form = document.createElement('form');
      form.className = 'admin-applications__list-item-text';
      form.action = '';

      // Create paragraphs and spans
      const numberParagraph = createParagraph('Номер заявки: ', 'number', item.id);
      const nameParagraph = createParagraph('Имя: ', 'name', item.name);
      const serviceParagraph = createParagraph('Услуга: ', 'service', item.service);

      // Create inner list and items
      const innerList = document.createElement('ul');
      innerList.className = 'admin-applications__list admin-applications__list-inner';

      const innerPhoneItem = createInnerListItem('Телефон: ', 'phoneNumber', item.phone);
      const innerEmailItem = createInnerListItem('Почта: ', 'email', item.email);
      const innerWishesItem = createInnerListItem('Пожелания:<br />', 'wishes', item.wish);

      // Create HR element
      const hr = document.createElement('hr');
      hr.className = 'admin-applications__list-inner-line';

      // Create button

      const innerListItemBtn = document.createElement('li');
      innerListItemBtn.className = 'admin-applications__list-inner-item';

      const button = document.createElement('button');
      button.className = 'button admin-applications__list-item-text-button';
      button.type = 'submit';
      button.textContent = 'Вернуть в заявки';
      innerListItemBtn.appendChild(button);

      button.addEventListener('click', (e) => {
        e.preventDefault();
        updateApplications(item.id).then(() => {
          listItem.remove();
          toastr.success('Заявка возвращена');
        });
      });

      // Append elements
      form.appendChild(numberParagraph);
      form.appendChild(nameParagraph);
      form.appendChild(serviceParagraph);
      innerList.appendChild(innerPhoneItem);
      innerList.appendChild(innerEmailItem);
      innerList.appendChild(innerWishesItem);
      innerList.appendChild(hr);
      innerList.appendChild(innerListItemBtn);
      form.appendChild(innerList);
      listItem.appendChild(form);

      // Create SVG icon
      const iconContainer = document.createElement('div');
      iconContainer.className = 'admin-applications__list-item-icon';
      iconContainer.id = 'admin-applications-dropdown-list-arrow';

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '9');
      svg.setAttribute('viewBox', '0 0 16 9');
      svg.setAttribute('fill', 'none');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M1 1.5L8 7.5L15 1.5');
      path.setAttribute('stroke', '#AEBBFF');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');

      svg.appendChild(path);
      iconContainer.appendChild(svg);
      listItem.appendChild(iconContainer);

      // Append the list item to the body
      adminApplicationsList.appendChild(listItem);

      // Helper function to create paragraphs with spans
      function createParagraph(label, spanId, content = '') {
        const paragraph = document.createElement('p');
        paragraph.className = 'admin-applications__list-item-title';
        paragraph.innerHTML = `${label}<span id="${spanId}">${content}</span>`;
        return paragraph;
      }

      // Helper function to create inner list items with paragraphs
      function createInnerListItem(label, spanId, content = '') {
        const innerListItem = document.createElement('li');
        innerListItem.className = 'admin-applications__list-inner-item';
        const paragraph = document.createElement('p');
        paragraph.className = 'admin-applications__list-item-title';
        paragraph.innerHTML = `${label}<span id="${spanId}">${content}</span>`;
        innerListItem.appendChild(paragraph);
        return innerListItem;
      }
    });
  })
  .then(() => {
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
  });
