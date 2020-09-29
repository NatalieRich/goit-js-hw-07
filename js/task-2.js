const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const ingredient = ingredients.map((option) => {
  const ingredientList = document.createElement("li");
  ingredientList.textContent = option;

  return ingredientList;
});
console.log(ingredient);

listRef.append(...ingredient);
