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

document.querySelectorAll(".capslock, .shift, .right-shift").forEach(key => {
  key.addEventListener("click", event => {
    event.target.classList.toggle("active");
  });
});

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("mousedown", event => {
    key.classList.add("active");
  });
  key.addEventListener("mouseup", event => {
    key.classList.remove("active");
  });
  key.addEventListener("mouseleave", event => {
    key.classList.remove("active");
  });
});

document.addEventListener("keydown", event => {
  const keyChar = event.key;

  if (keyChar === "Backspace") {
    event.preventDefault();
    input.value = input.value.slice(0, -1);
  }

   document.querySelectorAll(".key").forEach(key => {
    const keyValue = key.textContent;

    if (keyChar === keyValue) {
      key.classList.add("active");
    }
  });

    if (keyChar === "CapsLock") {
      event.preventDefault();
      isCapsLockOn = !isCapsLockOn;
      document.querySelector(".capslock").classList.toggle("active");
    }
  
    if (/[a-zA-Z0-9]/.test(keyChar)) {
      if (isCapsLockOn) {
        input.value += keyChar.toUpperCase();
      } else {
        input.value += keyChar.toLowerCase();
      }
    }
  });

document.addEventListener("keyup", event => {
  const keyChar = event.key;

  document.querySelectorAll(".key").forEach(key => {
    const keyValue = key.textContent;

    if (keyChar === keyValue) {
      key.classList.remove("active");
    }
  });
});