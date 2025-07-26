const startDate = new Date("2024-11-16T00:00:00");

function updateCountUp() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countup").innerHTML =
    `${days} days 🌞<br>` +
    `${hours} hours ⏰<br>` +
    `${minutes} minutes ⌛<br>` +
    `${seconds} seconds 💫`;
}

setInterval(updateCountUp, 1000);
updateCountUp();
