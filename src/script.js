const sliderElement = document.querySelector("#slider");
const sizePassword = document.querySelector("#valor");
const passwordElement = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const tooltip = document.querySelector(".tooltip");

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = () => sizePassword.innerHTML = sliderElement.value;

const generatePassword = () => {
  let pass = '';
  for (let i = 0, len = parseInt(sliderElement.value, 10); i < len; i++) {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return (!/[a-z]/.test(pass) || !/[A-Z]/.test(pass) || !/[0-9]/.test(pass) || !/[!@#$%&*]/.test(pass)) ? generatePassword() : pass;
};

document.querySelector("#button").onclick = () => {
  novaSenha = generatePassword();
  containerPassword.classList.remove("hide");
  passwordElement.innerHTML = novaSenha;
  tooltip.innerHTML = "Clique na senha para copiar. 👆";
};

document.querySelector("#container-password").onclick = () => {
  navigator.clipboard.writeText(novaSenha).then(() => {
    tooltip.innerHTML = "Senha copiada para a área de transferência! 👍";
    setTimeout(() => tooltip.innerHTML = "Clique na senha para copiar. 👆", 2000);
  });
};