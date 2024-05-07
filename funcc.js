const firstDiv = document.querySelector(".first-step");
const secondDiv = document.querySelector(".second-step");
const finalDiv = document.querySelector(".final-step");

function go(currentStep, nextStep) {
  let dNone, dBlock;
  if (currentStep === 1) {
    dNone = firstDiv;
  } else if (currentStep === 2) {
    dNone = secondDiv;
  } else {
    dNone = finalDiv;
  }
  dNone.style.display = "none";
  if (nextStep === 1) {
    dBlock = firstDiv;
  } else if (nextStep === 2) {
    dBlock = secondDiv;
  } else {
    dBlock = finalDiv;
  }
  dBlock.style.display = "block";
}

function validate() {
  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");
  peso.style.border = "none";
  altura.style.border = "none";

  if (!peso.value || !altura.value) {
    if (!peso.value && !altura.value) {
      peso.style.border = "1px solid red";
      altura.style.border = "1px solid red";
    } else if (!peso.value) {
      peso.style.border = "1px solid red";
    } else {
      altura.style.border = "1px solid red";
    }
  } else {

    let imc = (peso.value / (altura.value * altura.value)) * 10000;
    const result = document.getElementById("resultado");
    imc = parseFloat(imc).toFixed(1)
    
  
    if (imc < 18.5) {

      result.style.color = "gray";
      result.innerHTML = "Magreza  Obesidade: Grau 0  IMC = " + imc;
    } else if (imc >= 18.5 && imc <= 25) {

      result.style.color = "yellow";
      result.innerHTML = "Normal  Obesidade: Grau 0  IMC = " + imc;
    } else if (imc >= 25 && imc <= 30) {

      result.style.color = "green";
      result.innerHTML = "Sobrepeso  Obesidade: Grau I  IMC = " + imc;
    } else if (imc >= 30 && imc <= 39) {

      result.style.color = "red";
      result.innerHTML = "Obesidade  Grau II  IMC = " + imc;
    } else {

      result.style.color = "black";
      result.innerHTML = "Obesidade grave  Grau III -- IMC = " + imc;
    }
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    go(2, 3);
  }
}
