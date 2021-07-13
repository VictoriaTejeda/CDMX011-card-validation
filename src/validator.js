const validator = {
  isValid(ccNumber) {
    let result = [];
    let cardReverse = reverse(ccNumber);
    //console.log(cardReverse);
    for (let i = 0; i < cardReverse.length; i++) {
      let numero = parseInt(cardReverse[i], 10);

      if (i % 2 != 0) {
        let mult2 = numero * 2;
        if (mult2 >= 10) {
          let splitNum = splitToDigit(mult2);
          //console.log(splitNum);
          // console.log(splitNum.reduce((a, b) => a + b));
          let sumNum = splitNum.reduce((a, b) => a + b);
          //console.log("meto numero multiplicado por dos y sumado "+ sumNum);

          result.push(sumNum);
        } else {
          //console.log("meto numero multiplicado por dos "+ mult2);

          result.push(mult2);
        }
      } else {
        //console.log("meto numero normal "+ numero);

        result.push(numero);
      }
    }

    //console.log(result);
    let sumTotal = result.reduce((a, b) => a + b);
    //console.log(sumTotal);
    //console.log(sumTotal % 10 == 0);
    return sumTotal % 10 == 0;
  },
  maskify(ccNumber) {
    let mask = "";
    let cont = 0;
    for (let i = ccNumber.length; i >= 0; i--) {
      if (cont <= 4) {
        //console.log(ccNumber.charAt(i));
        mask += ccNumber.charAt(i);
      } else {
        console.log("#");
        mask += "#";
      }
      cont++;
    }
    return reverse(mask);
  },
};

function splitToDigit(n) {
  return (n + "").split("").map((i) => {
    return Number(i);
  });
}

function reverse(cc) {
  return cc.split("").reverse().join("");
}

export default validator;
