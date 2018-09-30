"use strict";

// order of variables saved:
//
// countdown
// keyboardMode[1]
// mutestate
// highscore
// gamesPlayed
// keyValue1
// keyValue2
// keyValue3
// keyValue4
// cookiesAllowed
//
// Triggers for cookieWriter
//
// Close options
// stop()
//



function cookieWriter() {
  if (cookiesAllowed === true) {
    let cookieMe = [];
    cookieMe.push(countdown);
    cookieMe.push(keyboardMode[1]);
    cookieMe.push(mutestate);
    cookieMe.push(highscore);
    cookieMe.push(gamesPlayed);
    cookieMe.push(keyValue1);
    cookieMe.push(keyValue2);
    cookieMe.push(keyValue3);
    cookieMe.push(keyValue4);
    cookieMe.push(cookiesAllowed);
    let date = "Mon, 31 Dec 2018 23:59:59 GMT";
    let parsed = cookieMe.join("_");
    document.cookie = `options=${parsed}; expires=${date}`;
  }
}

function cookieRemover() {
  document.cookie = `options=""; expires=Mon, 31 Dec 1970 23:59:59 GMT`;
}

function cookieReader() {   // not as good as planned
  let savedProgress = document.cookie;
  if (savedProgress) {
    savedProgress = savedProgress.substring(8).split("_");
    if (savedProgress[0] === "true"){
      countdown = true;
    }else countdown = false;
    keyboardMode[1] = parseInt(savedProgress[1]);
    mutestate = parseInt(savedProgress[2]);
    highscore = parseInt(savedProgress[3]);
    gamesPlayed = parseInt(savedProgress[4]);
    keyValue1 = parseInt(savedProgress[5]);
    keyValue2 = parseInt(savedProgress[6]);
    keyValue3 = parseInt(savedProgress[7]);
    keyValue4 = parseInt(savedProgress[8]);
    if (savedProgress[9] === "true") {
      cookiesAllowed = true;
    } else cookiesAllowed = false;
    optionsUpdater();
  }else return;
}

function optionsUpdater() {
  if (countdown === true){
    countdownState.innerHTML = "On"
  } else countdownState.innerHTML = "Off";
// #######################################################
  if (keyboardMode[1] === 0){
    for (let key of keyCharacters) {
      key.style.display = "none";
    }
    keyboardMode[0].innerHTML = "Off";
    keyboardMode[1] = 0;
  }else if (keyboardMode[1] === 1){
    for (let key of keyCharacters) {
      key.style.display = "initial";
    }
    keyboardMode[0].innerHTML = "On";
    keyboardMode[1] = 1;
  }
// #######################################################
    if (mutestate === 1) {
      player();
      muteOption.innerHTML = "On"
    }else{
      muteOption.innerHTML = "Off"
}
// #######################################################
    document.getElementById("high-score").innerHTML = highscore;
    document.getElementById("games-played").innerHTML = gamesPlayed;
// #######################################################

  customkey1.innerHTML = String.fromCharCode(keyValue1);
  keyCharacters[0].innerHTML = String.fromCharCode(keyValue1);
  customkey2.innerHTML = String.fromCharCode(keyValue2);
  keyCharacters[1].innerHTML = String.fromCharCode(keyValue2);
  customkey3.innerHTML = String.fromCharCode(keyValue3);
  keyCharacters[2].innerHTML = String.fromCharCode(keyValue3);
  customkey4.innerHTML = String.fromCharCode(keyValue4);
  keyCharacters[3].innerHTML = String.fromCharCode(keyValue4);

// #######################################################

  if (cookiesAllowed === true){
    cookiesOptions.innerHTML = "On";
  } else cookiesOptions.innerHTML = "Off";

} // end of updater


// EOF
