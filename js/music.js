"use strict";

const intro = new Audio("music/intro.ogg"); intro.volume = 0.2;
const mainloop = new Audio("music/mainloop.ogg");
const gametime = new Audio("music/gametime.ogg");
const maxspeed = new Audio("music/maxspeed.ogg");
const endscreen = new Audio("music/endscreen.ogg");
const beep = new Audio("music/beep2.ogg");
const songs = [intro, mainloop, gametime, maxspeed, endscreen, beep];
let mutestate = 0;    // keeps track of mute situation; 0 means "not muted"

const mutesound = document.getElementById("mute").onclick = muteSound;

function muteSound() {
  if (mutestate === 0) {
    for (let i = 0; i < songs.length; i++) {  // mutes every sound
      songs[i].volume = 0;
      muteOption.innerHTML = "On";
    }
    mutestate++;                // updates muted situation
  }else if (mutestate === 1) {
    for (let i = 0; i < songs.length; i++) {
      songs[i].volume = 1;
      muteOption.innerHTML = "Off";
    }
    mutestate--;                // updates muted situation
    intro.volume = 0.2;
  }
}

let introcheck = 0;             // prevents intro from playing twice
let stopcheck = 0;              // tells if stopSound has been triggered

function player(x) {                    // this function handles audio requests
  if (mutestate === 0){
    intro.volume = 0.2;
    mainloop.volume = 1;
    gametime.volume = 1;
    endscreen.volume = 1;
    beep.volume = 1;
  }else if (mutestate === 1){
    intro.volume = 0;
    mainloop.volume = 0;
    gametime.volume = 0;
    endscreen.volume = 0;
    beep.volume = 0;
  }
  if (x === 0 && introcheck === 0) {    // HINGEROOOOOOOOSTAS
    intro.play();
    introcheck++                        // intro has been played
    setTimeout(() => player(1), 6850)   // and now moving to menu music
  }else if (x === 1 && stopcheck === 0) {   // which will not play if player
    mainloop.loop = true;                   // started already. Otherwise loops
    mainloop.play();
  }else if (x === 2) {   // gametime!
    gametime.play()
  }else if (x === 3) {                      // you win/lose
    endscreen.play()
  }

}

function stopSound() {                      // every switch needs this
  stopcheck++;                              // informs that menumusic is obsolete
  for (let i = 0; i < songs.length; i++) {  // pauses every audio
    songs[i].pause();
    songs[i].currentTime = 0;
  }
}




// EOF
