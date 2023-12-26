import { onModal } from './adminModal';
const catalogModalButton = document.querySelector('#catalogButton');
const catalogModal = document.querySelector('.admin-catalog-modal');
const catalogModalForm = document.querySelector('.admin-catalog-modal__form');

onModal(catalogModalButton, catalogModal, 'admin-catalog-modal_active', catalogModalForm);
