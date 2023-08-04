document.addEventListener("DOMContentLoaded", function () {
  const ambushDate = new Date("September 15, 2023");
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = ambushDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  setInterval(updateCountdown, 1000);
});
