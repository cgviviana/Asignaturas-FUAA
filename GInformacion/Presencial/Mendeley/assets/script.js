
(function () {
  const pages = window.FLIP_PAGES || [];
  const n = pages.length;

  const frontImg = document.getElementById("frontImg");
  const backImg = document.getElementById("backImg");
  const sheet = document.getElementById("sheet");
  const status = document.getElementById("status");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let current = 1;        // 1..n
  let animating = false;  // lock during transition

  function srcFor(pageNumber) {
    const idx = pageNumber - 1;
    if (idx < 0 || idx >= n) return null;
    return `pages/${pages[idx]}`;
  }

  function setButtons() {
    prevBtn.disabled = (current <= 1) || animating;
    nextBtn.disabled = (current >= n) || animating;
  }

  function setStatus() {
    status.textContent = `Página ${current} / ${n}`;
  }

  function setFront(pageNumber) {
    const s = srcFor(pageNumber);
    if (s) frontImg.src = s;
  }

  function setBack(pageNumber) {
    const s = srcFor(pageNumber);
    backImg.src = s ? s : frontImg.src;
  }

  // Initial
  setFront(current);
  setBack(current + 1);
  setStatus();
  setButtons();

  // Preload
  pages.forEach(p => {
    const img = new Image();
    img.src = `pages/${p}`;
  });

  function goNext() {
    if (animating || current >= n) return;
    animating = true;
    setButtons();

    // Prepare: back is next
    setBack(current + 1);

    sheet.classList.remove("turn-prev");
    sheet.classList.add("turn-next");

    const onDone = () => {
      sheet.removeEventListener("transitionend", onDone);
      current += 1;
      // Reset sheet and set new front
      sheet.classList.remove("turn-next");
      setFront(current);
      setBack(current + 1);
      setStatus();
      animating = false;
      setButtons();
    };
    sheet.addEventListener("transitionend", onDone);
  }

  function goPrev() {
    if (animating || current <= 1) return;
    animating = true;
    setButtons();

    // Prepare: back is prev
    setBack(current - 1);

    sheet.classList.remove("turn-next");
    sheet.classList.add("turn-prev");

    const onDone = () => {
      sheet.removeEventListener("transitionend", onDone);
      current -= 1;
      sheet.classList.remove("turn-prev");
      setFront(current);
      setBack(current + 1);
      setStatus();
      animating = false;
      setButtons();
    };
    sheet.addEventListener("transitionend", onDone);
  }

  nextBtn.addEventListener("click", goNext);
  prevBtn.addEventListener("click", goPrev);

  // Click on page = next (right side), shift+click = prev
  sheet.addEventListener("click", (e) => {
    if (e.shiftKey) goPrev();
    else goNext();
  });

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  });
})();
