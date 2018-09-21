"use strict";

const optionButton = document.getElementById("options-button");
const optionWindow = document.getElementsByClassName('options-container')[0];
const optionsClose = document.getElementById('close-options');
const countdownState = document.getElementById("countdown-state");
const keyboardMode = [document.getElementById("keyboard-mode"), 1];
const muteOption = document.getElementById("mute-option");

const keyCharacters = document.getElementsByClassName("key");

optionsClose.onmousedown = () => optionWindow.style.display = "none";
optionButton.onmousedown = () => optionWindow.style.display = "initial";

countdownState.addEventListener("mousedown", () =>{
  if (countdown){
    countdown = false;
    countdownState.innerHTML = "Off"
  }else{
    countdown = true;
    countdownState.innerHTML = "On"
  }
});

keyboardMode[0].addEventListener("mousedown", () =>{

  if (keyboardMode[1] === 1){
    for (let key of keyCharacters) {
      key.style.display = "none";
    }
    keyboardMode[0].innerHTML = "Off";
    keyboardMode[1] = 0;
  }else{
    for (let key of keyCharacters) {
      key.style.display = "initial";
    }
    keyboardMode[0].innerHTML = "On";
    keyboardMode[1] = 1;
  }
});