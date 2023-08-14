document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    const litersSpan = document.getElementById("liters");
    const turbinesSpan = document.getElementById("turbines");
    const timeSpan = document.getElementById("time");
  
    calculateButton.addEventListener("click", function () {
      const kwh = parseFloat(document.getElementById("kwh").value);
  
      if (isNaN(kwh) || kwh <= 0) {
        alert("Ingrese una cantidad válida de kWh.");
        return;
      }
  
      const requiredLiters = (kwh * 1713000) / 35000;
      const requiredTurbines = Math.ceil(kwh / 12);
      const timeHours = requiredTurbines * 24;
  
      litersSpan.textContent = requiredLiters.toFixed(2) + " litros";
      turbinesSpan.textContent = requiredTurbines;
      timeSpan.textContent = timeHours + " horas";
  
      resultDiv.classList.remove("hidden");
    });
  });
  