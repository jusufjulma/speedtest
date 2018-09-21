"use strict";

window.addEventListener("keydown", (pressed) => {
    switch (pressed.keyCode) {
      case 68:
        console.log("Osu D!");
        userPress(0)
        break;
      case 70:
        console.log("Osu F!");
        userPress(1)
        break;
      case 74:
        console.log("Osu J!");
        userPress(2)
        break;
      case 75:
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
