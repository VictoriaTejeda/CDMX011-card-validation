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
        if (validator.isValid(ccNumber)){
            document.getElementById("CardNum").value= validator.maskify(ccNumber);
            document.getElementById("h1-valid").innerHTML = "aquí va un icono verde";
        }else {
            alert("ingresa un número valido");
            document.getElementById("h1-valid").innerHTML = "aquí va un icono rojo";
        }
    }else{
        alert("ingresa los 16 digitos de tu tarjeta");
        document.getElementById("h1-valid").innerHTML = "aquí va un icono rojo";

    }
}

window.reset= function reset(){
    document.getElementById("CardNum").value="";
    
}