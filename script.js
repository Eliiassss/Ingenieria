document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");
  const kwhInput = document.getElementById("kwh");
  const kwhForAnalysisSpan = document.getElementById("kwh-for-analysis");
  const litersSpan = document.getElementById("liters");
  const turbinesSpan = document.getElementById("turbines");
  const timeSpan = document.getElementById("time");
  const consumptionOptions = document.querySelectorAll(".consumption-option");

  consumptionOptions.forEach(option => {
    option.addEventListener("click", function () {
      option.classList.toggle("selected");
      updateKwhForAnalysis();
    });
  });

  kwhInput.addEventListener("input", function () {
    updateKwhForAnalysis();
  });

  calculateButton.addEventListener("click", function () {
    const selectedOptions = document.querySelectorAll(".consumption-option.selected");
    let totalKwh = parseFloat(kwhInput.value) || 0;

    selectedOptions.forEach(option => {
      totalKwh += parseFloat(option.getAttribute("data-kwh"));
    });

    calculateEnergy(totalKwh);
  });

  function updateKwhForAnalysis() {
    const selectedOptions = document.querySelectorAll(".consumption-option.selected");
    let totalKwh = parseFloat(kwhInput.value) || 0;

    selectedOptions.forEach(option => {
      totalKwh += parseFloat(option.getAttribute("data-kwh"));
    });

    kwhForAnalysisSpan.textContent = totalKwh;
  }

  function calculateEnergy(kwh) {
    if (isNaN(kwh) || kwh <= 0) {
      alert("Ingrese la cantidad de kWh requeridos para analizar");
      return;
    }

    const requiredLiters = (kwh * 1713000) / 35000;
    const requiredTurbines = Math.ceil(kwh / 12);
    const timeHours = requiredTurbines * 24;

    litersSpan.textContent = requiredLiters.toFixed(2) + " m³"; // Cambio "litros" por "m³"
    turbinesSpan.textContent = requiredTurbines;
    timeSpan.textContent = timeHours + " horas";

    resultDiv.classList.remove("hidden");
  }
});
