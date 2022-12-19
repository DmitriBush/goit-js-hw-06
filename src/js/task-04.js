let counterValue = 0;

let valueEl = document.querySelector("#value");

const dekrementBtn = document.querySelector("#counter").firstElementChild;
const inkrementBtn = document.querySelector("#counter").lastElementChild;

dekrementBtn.addEventListener("click", () => {
  counterValue -= 1;

  valueEl.innerText = counterValue;
});

inkrementBtn.addEventListener("click", () => {
  counterValue += 1;

  valueEl.innerText = counterValue;
});
