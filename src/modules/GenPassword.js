export default class StrongPassword {
  options() {
    const getSymbol = document.querySelector(".symbol");
    const getNumber = document.querySelector(".number");
    const getUpper = document.querySelector(".upper");
    return this.genNewPassword(
      getNumber.checked,
      getSymbol.checked,
      getUpper.checked
    );
  }

  randNumber(min = 0, max = 9) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }
  upperCase() {
    const genUpper = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(genUpper);
  }
  lowerCase() {
    const genLower = Math.floor(Math.random() * 26) + 97;

    return String.fromCharCode(genLower);
  }
  symbol() {
    const genSymbol = Math.floor(Math.random() * 26) + 33;
    return String.fromCharCode(genSymbol);
  }
  passwordSize() {
    const getSize = document.querySelector(".quantity");
    const innerError = document.querySelector(".error");

    if (getSize.value > 30) {
      return (innerError.innerHTML = "Insira um valor menor ou igual a 30");
    }
    if (getSize.value < 5) {
      return (innerError.innerHTML = "Insira um valor maior ou igual a 5");
    } else return getSize.value;
  }
  genButton() {
    console.log("cliquei");
  }
  removeError() {
    const getError = document.querySelector(".error");
    const getPassword = document.querySelector(".password");
    if (getPassword.textContent) {
      getError.innerHTML = "";
    }
  }

  genNewPassword(number, symbol, upper) {
    let newPassword = "";
    while (newPassword.length < this.passwordSize()) {
      try {
        if (number && newPassword.length < this.passwordSize()) {
          newPassword += this.randNumber();
        }
        if (symbol && newPassword.length < this.passwordSize()) {
          newPassword += this.symbol();
        }
        if (upper && newPassword.length < this.passwordSize()) {
          newPassword += this.upperCase();
        }
        if (newPassword.length < this.passwordSize()) {
          newPassword += this.lowerCase();
        }
        console.log(newPassword.length);
      } catch (error) {
        console.log(error);
      }
    }

    return newPassword;
  }
}
