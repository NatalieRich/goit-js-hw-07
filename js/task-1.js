const categoriesEl = document.querySelectorAll(".item");

console.log(`В списке ${categoriesEl.length} категории`);

categoriesEl.forEach((category) => {
  console.log(`Категория: ${category.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов : ${category.querySelectorAll("li").length}`
  );
});
