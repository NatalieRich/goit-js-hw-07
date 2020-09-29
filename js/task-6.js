const checkInput = document.querySelector("#validation-input");
checkInput.addEventListener("keypress", onKeypress);

function onKeypress(event) {
  const checkInputText = (checkInput.textContent += event.key);
  if (checkInputText.length === 6) {
    checkInput.classList = "valid";
  } else {
    checkInput.classList = "invalid";
  }
}
