(function () {
  const timeEl = document.getElementById('clock-time');
  const tzEl = document.getElementById('clock-tz');
  const toggleBtn = document.getElementById('clock-format');

  let use24h = true;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const now = new Date();
    let hours = now.getHours();
    let suffix = '';

    if (!use24h) {
      suffix = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12;
      if (hours === 0) hours = 12;
    }

    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    timeEl.textContent = `${pad(hours)}:${minutes}:${seconds}${suffix}`;
  }

  // Bonus: show the viewer's actual IANA timezone abbreviation-ish label
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    tzEl.textContent = tz;
  } catch (e) {
    tzEl.textContent = '';
  }

  toggleBtn.addEventListener('click', function () {
    use24h = !use24h;
    toggleBtn.textContent = use24h ? '24h' : '12h';
    tick();
  });

  tick();
  setInterval(tick, 1000);
})();
