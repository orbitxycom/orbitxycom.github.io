// Countdown timer for the claim button (starts at 7:59:14, matches screenshot)
(function () {
  let totalSeconds = 7 * 3600 + 59 * 60 + 14;
  const timerEl = document.querySelector('.timer-text');

  function format(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function tick() {
    if (totalSeconds <= 0) {
      totalSeconds = 8 * 3600; // reset loop
    } else {
      totalSeconds--;
    }
    if (timerEl) timerEl.textContent = format(totalSeconds);
  }

  setInterval(tick, 1000);

  // Simple claim button feedback
  const claimBtn = document.querySelector('.claim-btn');
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      claimBtn.style.opacity = '0.7';
      setTimeout(() => (claimBtn.style.opacity = '1'), 150);
    });
  }

  const bannerClaim = document.querySelector('.banner-claim');
  if (bannerClaim) {
    bannerClaim.addEventListener('click', () => {
      bannerClaim.style.opacity = '0.7';
      setTimeout(() => (bannerClaim.style.opacity = '1'), 150);
    });
  }
})();
