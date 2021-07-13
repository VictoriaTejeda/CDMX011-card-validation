import validator from "./validator.js";
const iconoBien = document.getElementById("credit_score");
const iconoMal = document.getElementById("warning");

window.validaNum = function validaNum(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    let car_num = event.target.value + event.key;
    if (car_num.length == 16) {
      validaCard(car_num);
    }
    return true;
  }
  return false;
};

function validaCard(ccNumber) {
    if (validator.isValid(ccNumber)) {
      document.getElementById("cardNum").value = validator.maskify(ccNumber);
      showSuccess(true);
      document.getElementById("validation").innerHTML=" ¡Tarjeta Valida!";
      let imageToShow = "./images/"+validator.getIssuer(ccNumber)+".png";
      let logo = document.getElementById("issuer-logo");
      logo.setAttribute("src",imageToShow);
      logo.className.replace(imageToShow);
      
    } else {
      showSuccess(false);
      document.getElementById("validation").innerHTML=" ¡Tarjeta Invalida!";
    }
}

window.reset = function reset() {
  document.getElementById("cardNum").value = "";
  document.getElementById("validation").innerHTML="";
  document.getElementById("issuer-logo").setAttribute("src","./images/unknown.png");
  iconoBien.hidden = true;
  iconoMal.hidden = true;
};

function showSuccess(esconder) {
  iconoBien.hidden = !esconder;
  iconoMal.hidden = esconder;
}
