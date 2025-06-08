window.onload = function () {
  // Data inicial do relacionamento: 17 de novembro de 2024
  const startDate = new Date(2024, 10, 17, 0, 0, 0);

  // Pluralizar as palavras
  function pluralize(value, singular, plural) {
    return `${value} ${value === 1 ? singular : plural}`;
  }

  // Se aparecer 0 e trocar por 1
  function forceNonZero(value) {
    return value === 0 ? 1 : value;
  }

  // Atualiza o tempo
  function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);
    const rawSeconds = totalSeconds % 60;
    const seconds = forceNonZero(rawSeconds);

    const totalMinutes = Math.floor(totalSeconds / 60);
    const rawMinutes = totalMinutes % 60;
    const minutes = forceNonZero(rawMinutes);

    const totalHours = Math.floor(totalMinutes / 60);
    const rawHours = totalHours % 24;
    const hours = forceNonZero(rawHours);

    const totalDays = Math.floor(totalHours / 24);
    const rawYears = Math.floor(totalDays / 365);

    const rawMonths = Math.floor((totalDays % 365) / 30);
    const months = forceNonZero(rawMonths);

    const rawDays = (totalDays % 365) % 30;
    const days = forceNonZero(rawDays);

    // Atualiza o texto dos cards (todos são sempre visíveis)
    document.getElementById("month").textContent = pluralize(months, "Mês", "Meses");
    document.getElementById("day").textContent = pluralize(days, "Dia", "Dias");
    document.getElementById("hour").textContent = pluralize(hours, "Hora", "Horas");
    document.getElementById("minute").textContent = pluralize(minutes, "Minuto", "Minutos");
    document.getElementById("second").textContent = pluralize(seconds, "Segundo", "Segundos");

    const yearCard = document.getElementById("yearCard");
    const yearText = document.getElementById("year");

    if (rawYears >= 1) {
      yearCard.style.display = "flex";
      yearText.textContent = pluralize(rawYears, "Ano", "Anos");
    } else {
      yearCard.style.display = "none";
    }

    document.getElementById("start-date").textContent = `${startDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })}`;
  }

  updateTime(); // executa assim que a página carrega
  setInterval(updateTime, 1000); // atualiza a cada 1 segundo
};
