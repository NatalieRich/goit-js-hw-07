const checkInput = document.querySelector("#validation-input");
checkInput.addEventListener("blur", onKeypress);

function onKeypress(event) {
  checkInput.classList.add("invalid");

  if (event.currentTarget.value.length === Number(checkInput.dataset.length)) {
    checkInput.classList.replace("invalid", "valid");
  }
}
