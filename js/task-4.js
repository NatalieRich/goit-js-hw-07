const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;
let value = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
