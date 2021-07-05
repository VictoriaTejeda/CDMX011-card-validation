import validator from './validator.js';

window.validaNum = function validaNum(event){
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
       }
       return false; 
}

window.validaBtn = function validaBtn(){
    let ccNumber= document.getElementById("CardNum").value;
    if(ccNumber.length ==16){
        validator.maskify(ccNumber);
        validator.isValid(ccNumber);
        if (validator.isValid(ccNumber)){
            document.getElementById("mask").innerHTML = "El número de tu tarjeta es: " + validator.maskify(ccNumber);
        }else {
            alert("ingresa un número valido");
        }
    }else{
        alert("ingresa los 16 digitos de tu tarjeta");
    }
}

