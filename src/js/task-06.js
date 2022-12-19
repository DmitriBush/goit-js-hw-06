const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", inputValid);

function inputValid() {
  if (+inputEl.getAttribute("data-length") === inputEl.value.length) {
    inputEl.classList.add("valid");

    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");

    inputEl.classList.add("invalid");
  }
}
