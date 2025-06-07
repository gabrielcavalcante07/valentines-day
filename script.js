window.onload = function () {
  // Data inicial do relacionamento: 17 de novembro de 2024
  const startDate = new Date(2024, 10, 17, 0, 0, 0);

  function pluralize(value, singular, plural){
    return `${value} ${value === 1 ? singular : plural}`;
  }

  function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);
    const rawSeconds = totalSeconds % 60;
    const seconds = rawSeconds === 0 ? 1 : rawSeconds;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    const totalDays = Math.floor(totalHours / 24);
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = (totalDays % 365) % 30;

    document.getElementById("month").textContent = pluralize(months, "Mês", "Meses");
    document.getElementById("day").textContent = pluralize(days, "Dia", "Dias");
    document.getElementById("hour").textContent = pluralize(hours, "Hora", "Horas");
    document.getElementById("minute").textContent = pluralize(minutes, "Minuto", "Minutos");
    document.getElementById("second").textContent = pluralize(seconds, "Segundo", "Segundos");

    const yearCard = document.getElementById("yearCard");
    const yearText = document.getElementById("yearText");

    if (years >= 1) {
      yearCard.style.display = "flex";
      yearText.textContent = years;
      yearText.textContent = pluralize(years, "Ano", "Anos")
    } else {
      yearCard.style.display = "none";
    }

    document.getElementById(
      "start-date"
    ).textContent = `${startDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })}`;
  }

  updateTime(); // executa assim que a página carrega
  setInterval(updateTime, 1000); // atualiza a cada 1 segundo
};
