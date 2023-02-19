const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsInStock = document.querySelector("#ingredients");

const createIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const newElement = document.createElement("li");
    newElement.textContent = ingredient;
    return newElement;
  });
};

const ingredientsList = createIngredientsList(ingredients);
ingredientsInStock.append(...ingredientsList);
