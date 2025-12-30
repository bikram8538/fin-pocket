document.querySelectorAll(".goal-card").forEach(card => {
  const current = Number(card.dataset.current);
  const target = Number(card.dataset.target);
  const percent = Math.round((current / target) * 100);

  /* ---------- RING ---------- */
  const ring = card.querySelector(".ring-progress");
  const ringPercent = card.querySelector(".ring-percent");
  const ringValue = card.querySelector(".ring-value");

  if (ring) {
    const radius = ring.getAttribute("r");
    const circumference = 2 * Math.PI * radius;

    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset =
      circumference - (percent / 100) * circumference;
  }

  if (ringPercent) {
    ringPercent.textContent = percent + "%";
  }

  if (ringValue) {
    ringValue.textContent = current.toLocaleString();
  }

  /* ---------- LINEAR BAR (WIDE CARDS ONLY) ---------- */
  const bar = card.querySelector(".progress-fill");
  const barPercent = card.querySelector(".goal-percent");

  if (bar) {
    bar.style.width = percent + "%";
  }

  if (barPercent) {
    barPercent.textContent = percent + "%";
  }
});
