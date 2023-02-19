const categoriesList = document.querySelector("#categories");
const categoriesQuantity = categoriesList.children;
console.log(`Number of categories: ${categoriesQuantity.length}`);

[...categoriesQuantity].forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
