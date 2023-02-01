let valueEl = document.querySelector("#value");

let counterValue = 0;

const dekrementBtn = document.querySelector("#counter").firstElementChild;
const inkrementBtn = document.querySelector("#counter").lastElementChild;

dekrementBtn.addEventListener("click", () => {
  counterValue -= 1;

  valueEl.textContent = counterValue;
});

inkrementBtn.addEventListener("click", () => {
  counterValue += 1;

  valueEl.textContent = counterValue;
});
