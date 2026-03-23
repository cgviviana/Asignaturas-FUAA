
document.querySelectorAll('.tab-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
    window.scrollTo({ top: document.querySelector('.tabs').offsetTop - 12, behavior: 'smooth' });
  });
});

const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('imgModalContent');
const closeBtn = document.getElementById('imgModalClose');
document.querySelectorAll('[data-zoom]').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('open');
  });
});
closeBtn.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') modal.classList.remove('open');
});
