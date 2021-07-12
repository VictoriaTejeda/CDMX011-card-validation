import validator from "./validator.js";
let iconoBien = document.getElementById("credit_score");
let iconoMal = document.getElementById("warning");

window.validaNum = function validaNum(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    let car_num = event.target.value + event.key;
    if (car_num.length == 16) {
      validaBtn(car_num);
    }
    return true;
  }
  return false;
};

function validaBtn(ccNumber) {
    if (validator.isValid(ccNumber)) {
      document.getElementById("CardNum").value = validator.maskify(ccNumber);
      showSuccess(true);
      document.getElementById("validation").innerHTML=" ¡Tarjeta Valida!";
    } else {
      showSuccess(false);
      document.getElementById("validation").innerHTML=" ¡Tarjeta Invalida!";
    }
}

window.reset = function reset() {
  document.getElementById("CardNum").value = "";
  document.getElementById("validation").innerHTML="";
  iconoBien.hidden = true;
  iconoMal.hidden = true;
};

function showSuccess(esconder) {
  iconoBien.hidden = !esconder;
  iconoMal.hidden = esconder;
}
