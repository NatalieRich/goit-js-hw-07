const changeFontSize = document.querySelector("#font-size-control");
changeFontSize.addEventListener("input", onInputChange);

function onInputChange(event) {
  const text = document.querySelector("#text");
  text.style.fontSize = `${event.currentTarget.value}px`;
}
