"use strict";

let keyValue1 = 68; // D
let keyValue2 = 70; // F
let keyValue3 = 74; // J
let keyValue4 = 75; // K


window.addEventListener("keydown", (pressed) => {
  if (keyboardMode[1] === 1) {

    switch (pressed.keyCode) {
      case keyValue1:
        pressed.preventDefault();
        userPress(0)
        break;
      case keyValue2:
        pressed.preventDefault();
        userPress(1)
        break;
      case keyValue3:
        pressed.preventDefault();
        userPress(2)
        break;
      case keyValue4:
        pressed.preventDefault();
        userPress(3)
        break;
      case 77:
        pressed.preventDefault();
        muteSound()
        break;
      // default: console.log("Missed :---D");
    }
    if (pressed.ctrlKey && pressed.keyCode == 107) {
      pressed.preventDefault();
      console.log("CHEATS ACTIVATED!");
      score++
    }
  }
})
