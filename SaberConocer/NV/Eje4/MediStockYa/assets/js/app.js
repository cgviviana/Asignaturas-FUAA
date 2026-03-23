
const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');
navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');
    item.classList.toggle('open');
    header.setAttribute('aria-expanded', String(!isOpen));
    header.querySelector('.mark').textContent = isOpen ? '+' : '−';
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');

document.querySelectorAll('.shot img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.closest('figure').querySelector('figcaption')?.textContent || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src='';
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
