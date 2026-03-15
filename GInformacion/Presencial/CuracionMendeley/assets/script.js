(() => {
  const pages = Array.isArray(window.FLIP_PAGES) ? window.FLIP_PAGES : [];
  const total = pages.length;
  const aspect = Number(window.FLIP_ASPECT || 0.7071);

  const root = document.documentElement;
  root.style.setProperty('--page-aspect', String(aspect));

  const frontImg = document.getElementById('frontImg');
  const backImg = document.getElementById('backImg');
  const sheet = document.getElementById('sheet');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const status = document.getElementById('status');

  let index = 0;
  let busy = false;

  function clamp(n) {
    return Math.max(0, Math.min(total - 1, n));
  }

  function setButtonState() {
    prevBtn.disabled = index <= 0 || busy;
    nextBtn.disabled = index >= total - 1 || busy;
  }

  function preload(src) {
    const img = new Image();
    img.src = src;
  }

  function render() {
    if (!total) {
      status.textContent = 'Sin páginas';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }
    frontImg.src = pages[index];
    backImg.src = pages[index];
    status.textContent = `Página ${index + 1} / ${total}`;
    setButtonState();

    if (pages[index + 1]) preload(pages[index + 1]);
    if (pages[index - 1]) preload(pages[index - 1]);
  }

  function flipTo(nextIndex, dir) {
    nextIndex = clamp(nextIndex);
    if (busy || nextIndex === index) return;
    busy = true;
    setButtonState();

    if (dir === 'next') {
      backImg.src = pages[nextIndex];
      sheet.classList.add('flipping-next');
    } else {
      backImg.src = pages[nextIndex];
      sheet.classList.add('flipping-prev');
    }

    const done = () => {
      sheet.classList.remove('flipping-next', 'flipping-prev');
      index = nextIndex;
      frontImg.src = pages[index];
      backImg.src = pages[index];
      status.textContent = `Página ${index + 1} / ${total}`;
      busy = false;
      setButtonState();
      sheet.removeEventListener('transitionend', done);
    };

    sheet.addEventListener('transitionend', done, { once: true });
  }

  prevBtn.addEventListener('click', () => flipTo(index - 1, 'prev'));
  nextBtn.addEventListener('click', () => flipTo(index + 1, 'next'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') flipTo(index - 1, 'prev');
    if (e.key === 'ArrowRight') flipTo(index + 1, 'next');
  });

  render();
})();
