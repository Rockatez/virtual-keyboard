
const englishKeys = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
  "Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
  "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift",
  "Ctrl", "Alt", "Space", "Alt", "Ctrl", "Left", "Down", "Right"
];
const russianKeys = [
  "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
  "Caps Lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
  "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Up", "Shift",
  "Ctrl", "Alt", "Space", "Alt", "Ctrl", "Left", "Down", "Right"
];

const virtualKeyboard = document.createElement("div");
const keyboardInput = document.createElement("textarea");
const keyboardContainer = document.createElement("div");


function Keyboard() {
}
