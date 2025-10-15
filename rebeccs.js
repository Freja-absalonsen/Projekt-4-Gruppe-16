const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Sekunds = document.getElementById('sekunds');

const targetDate = new Date("November 30, 2025 00:00:00").getTime();

function pad(n) {
  return String(n).padStart(2, "0");
}

function timer() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    [Days, Hours, Minutes, Sekunds].forEach(el => el.textContent = "00");
    clearInterval(intervalId);
    return;
  }

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const sekunds = Math.floor((distance / 1000) % 60);

    console.log("Tid tilbage:", { days, hours, minutes, sekunds });

  const values   = [days, hours, minutes, sekunds];
  const elements = [Days, Hours, Minutes, Sekunds];

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = pad(values[i]);
  }


}

const intervalId = setInterval(timer, 1000);
timer();

const timerBox = document.querySelector(".hero_timebox");
timerBox.addEventListener("mouseover", () => {
  timerBox.style.transform = "scale(1.05)";
  timerBox.title = "Klik for at pause eller genstarte nedtællingen";
});
timerBox.addEventListener("mouseout", () => {
  timerBox.style.transform = "scale(1)";
});