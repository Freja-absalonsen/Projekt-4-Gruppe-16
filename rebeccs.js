const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Sekunds = document.getElementById('sekunds');

// Sluttidspunkt (tilpas hvis nødvendigt)
const targetDate = new Date("November 30, 2025 00:00:00").getTime(); 

function pad(n) {
  return String(n).padStart(2, "0");
}

function timer() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    Days.textContent = "00";
    Hours.textContent = "00";
    Minutes.textContent = "00";
    Sekunds.textContent = "00";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const sekunds = Math.floor((distance / (1000)) % 60);
  

  Days.textContent = pad(days);
  Hours.textContent = pad(hours);
  Minutes.textContent = pad(minutes);
  Sekunds.textContent =pad(sekunds);
}

const intervalId = setInterval(timer, 1000);
timer(); // kør én gang med det samme