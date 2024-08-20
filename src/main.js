import GenPassword from "./modules/GenPassword";

import "./assets/css/style.css";
function showPassword() {
  const gen = new GenPassword();

  const passwordGenerated = document.querySelector(".password");
  passwordGenerated.innerHTML = gen.options(); // aqui eu estou iniciando a função
  gen.removeError();
}
showPassword();
const getClick = document.querySelector(".gen-new");
getClick.addEventListener("click", showPassword);
addEventListener("change", showPassword);
