const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

// -----------------------------------------

// const itemEl = document.querySelectorAll(".item");

// console.log(`Number of categories: ${itemEl.length}`);

// const ul = document.querySelectorAll("#categories>li");

// itemEl.forEach((elem) => {
//   console.log(
//     `Category: ${elem.firstElementChild.textContent}
//   Elements: ${elem.lastElementChild.children.length}`
//   );
// });
