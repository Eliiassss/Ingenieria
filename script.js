const palabra1Input = document.getElementById("palabra1");
const palabra2Input = document.getElementById("palabra2");
const elegirBtn = document.getElementById("elegirBtn");
const resultadoP = document.getElementById("resultado");

elegirBtn.addEventListener("click", () => {
  const palabra1 = palabra1Input.value;
  const palabra2 = palabra2Input.value;

  if (palabra1 && palabra2) {
    const palabras = [palabra1, palabra2];
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    const palabraElegida = palabras[indiceAleatorio];
    resultadoP.textContent = `Palabra elegida: ${palabraElegida}`;
  } else {
    resultadoP.textContent = "Por favor, ingresa ambas palabras.";
  }
});
