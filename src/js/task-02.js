const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const list = ingredients.reduce((arr, item) => arr + `<li>${item}</li>`, "");

ulEl.innerHTML = list;
