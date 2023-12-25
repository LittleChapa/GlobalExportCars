function onModal(modalButton, modal, modalClassActive, modalForm) {
  modalButton.addEventListener('click', () => {
    modal.classList.toggle(modalClassActive);
    document.body.classList.toggle('noscroll');
  });
  modal.addEventListener('click', () => {
    modal.classList.toggle(modalClassActive);
    document.body.classList.toggle('noscroll');
  });
  modalForm.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}
