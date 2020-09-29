const inputText = document.querySelector("#name-input");
const changeName = document.querySelector("#name-output");

inputText.addEventListener("input", onInputChange);

function onInputChange(event) {
  changeName.textContent = event.currentTarget.value;
}
