"use strict";

let keyValue1 = 68; // D
let keyValue2 = 70; // F
let keyValue3 = 74; // J
let keyValue4 = 75; // K



window.addEventListener("keydown", (pressed) => {
    switch (pressed.keyCode) {
      case keyValue1:
        console.log("Osu D!");
        userPress(0)
        break;
      case keyValue2:
        console.log("Osu F!");
        userPress(1)
        break;
      case keyValue3:
        console.log("Osu J!");
        userPress(2)
        break;
      case keyValue4:
        console.log("Osu K!");
        userPress(3)
        break;
      case 77:
        console.log("Osu M!");
        muteSound()
        break;
      default: console.log("Missed :---D");
    }
    if (pressed.ctrlKey && pressed.keyCode == 107) {
      pressed.preventDefault();
      console.log("CHEATS ACTIVATED!");
      score++
    }
})
