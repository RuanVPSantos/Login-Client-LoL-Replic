const inputs = document.querySelectorAll(".input")
const button = document.querySelector('.botaoDeLogin')

const focando = ({target}) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
}

const retirandoFoco = ({target}) => {
  const span = target.previousElementSibling;
  if (target.value === "") {
    span.classList.remove("span-active");
  }
}

const valoresAtendidos = () =>
{
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
}


inputs.forEach((input) => input.addEventListener("focus", focando));
inputs.forEach((input) => input.addEventListener("focusout", retirandoFoco));
inputs.forEach((input) => input.addEventListener("input", valoresAtendidos));