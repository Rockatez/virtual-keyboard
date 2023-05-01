const input = document.getElementById("input");
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", event => {
    const keyValue = event.target.textContent;
    if (keyValue === "Backspace") {
      event.preventDefault();
      input.value = input.value.slice(0, -1);
    } else if (keyValue === "Enter") {
      input.value += "\n";
    } else if (keyValue === "Tab") {
      input.value += "\t";
    } else if (keyValue === "Caps Lock" || keyValue === "Shift") {
    } else {
      input.value += keyValue;
    }
    input.focus();
  });
});
