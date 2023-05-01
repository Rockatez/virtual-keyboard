const input = document.getElementById("input");
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", event => {
    const keyValue = event.target.textContent;
    if (keyValue === "Backspace") {
      event.preventDefault(); // prevent the default action of the Backspace key
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

// Add an event listener for Caps Lock and Shift keys to toggle the class "active"
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

// Add an event listener for keyboard input
document.addEventListener("keydown", event => {
  const keyChar = event.key;

  // prevent the default action of the Backspace key
  if (keyChar === "Backspace") {
    event.preventDefault();
    input.value = input.value.slice(0, -1);
  }

  // iterate through virtual keyboard keys
  document.querySelectorAll(".key").forEach(key => {
    const keyValue = key.textContent;

    // check if key value matches the pressed key
    if (keyChar === keyValue) {
      key.classList.add("active");
    }
  });

  // toggle the Caps Lock key on/off
  if (keyChar === "CapsLock") {
    event.preventDefault();
    isCapsLockOn = !isCapsLockOn;
    document.querySelector(".capslock").classList.toggle("active");
  }

  // update the input value with the pressed key
  if (/[a-zA-Z0-9]/.test(keyChar)) {
    if (isCapsLockOn) {
      input.value += keyChar.toUpperCase();
    } else {
      input.value += keyChar.toLowerCase();
    }
  }
});

// Add an event listener for keyboard input
document.addEventListener("keyup", event => {
  const keyChar = event.key;

  // iterate through virtual keyboard keys
  document.querySelectorAll(".key").forEach(key => {
    const keyValue = key.textContent;

    // check if key value matches the released key
    if (keyChar === keyValue) {
      key.classList.remove("active");
    }
  });
});