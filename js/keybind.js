"use strict";

let keyValue1 = 68; // D
let keyValue2 = 70; // F
let keyValue3 = 74; // J
let keyValue4 = 75; // K
const customkey1 = document.getElementById("customkey-1");
const customkey2 = document.getElementById("customkey-2");
const customkey3 = document.getElementById("customkey-3");
const customkey4 = document.getElementById("customkey-4");

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

customkey1.addEventListener("mousedown", () => keyBinder(1));
customkey2.addEventListener("mousedown", () => keyBinder(2));
customkey3.addEventListener("mousedown", () => keyBinder(3));
customkey4.addEventListener("mousedown", () => keyBinder(4));



function keyBinder(x) {
  if (x === 1) {
    customkey1.innerHTML = "???";
    let bind = (pressed) => {
      customkey1.innerHTML = `${(pressed.key).toUpperCase()}`;
      keyCharacters[x-1].innerHTML = `${(pressed.key).toUpperCase()}`;
      keyValue1 = pressed.keyCode;
      window.removeEventListener("keydown", bind);
    }
    window.addEventListener("keydown", bind);
  }else if (x === 2) {
    customkey2.innerHTML = "???";
    let bind = (pressed) => {
      customkey2.innerHTML = `${(pressed.key).toUpperCase()}`;
      keyCharacters[x-1].innerHTML = `${(pressed.key).toUpperCase()}`;
      keyValue2 = pressed.keyCode;
      window.removeEventListener("keydown", bind);
    }
    window.addEventListener("keydown", bind);
  }else if (x === 3) {
    customkey3.innerHTML = "???";
    let bind = (pressed) => {
      customkey3.innerHTML = `${(pressed.key).toUpperCase()}`;
      keyCharacters[x-1].innerHTML = `${(pressed.key).toUpperCase()}`;
      keyValue3 = pressed.keyCode;
      window.removeEventListener("keydown", bind);
    }
    window.addEventListener("keydown", bind);
  }else if (x === 4) {
    customkey4.innerHTML = "???";
    let bind = (pressed) => {
      customkey4.innerHTML = `${(pressed.key).toUpperCase()}`;
      keyCharacters[x-1].innerHTML = `${(pressed.key).toUpperCase()}`;
      keyValue4 = pressed.keyCode;
      window.removeEventListener("keydown", bind);
    }
    window.addEventListener("keydown", bind);
  }
}
















// EOF
