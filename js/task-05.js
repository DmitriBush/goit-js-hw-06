const refs = {
  input: document.querySelector("input#name-input"),
  nameLabel: document.querySelector("span#name-output"),
};
// console.log(refs.nameLabel);

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value || "Anonimus";
}
