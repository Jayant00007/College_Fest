const festivalStartsAt = new Date("2027-10-15T09:00:00+05:30").getTime();
const countdown = document.querySelector("#countdown");

function updateCountdown() {
  if (!countdown) return;

  const remaining = festivalStartsAt - Date.now();
  const units = countdown.querySelectorAll("[data-unit]");

  if (remaining <= 0) {
    countdown.replaceChildren(Object.assign(document.createElement("strong"), {
      textContent: "WE’RE LIVE"
    }));
    return;
  }

  const values = {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60)
  };

  units.forEach((unit) => {
    unit.textContent = String(values[unit.dataset.unit]).padStart(unit.dataset.unit === "days" ? 3 : 2, "0");
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
