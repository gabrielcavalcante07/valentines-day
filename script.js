window.onload = function () {
  const startDate = new Date(2024, 10, 17, 0, 0, 0); // 17/11/2024 (mês 10 = novembro)

  function updateTime() {
    const now = new Date();
    let diff = now - startDate;

    let totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;

    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;

    // Atualiza os elementos do HTML
    document.getElementById("year").textContent = years;
    document.getElementById("month").textContent = months;
    document.getElementById("day").textContent = days;
    document.getElementById("second").textContent = seconds;
  }

  // Atualiza a cada segundo
  updateTime(); // Chama logo que carrega
  setInterval(updateTime, 1000); // Atualiza a cada 1s
};
