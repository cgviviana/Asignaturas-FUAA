const tabButtons = document.querySelectorAll('.tab-buttons button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(id) {
  const template = document.getElementById(id);
  if (!template) return;
  modalBody.innerHTML = template.innerHTML;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.step-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target.dataset.close === 'true') closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
