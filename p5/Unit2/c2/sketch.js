let state = 0;
let timer = 0;
var mic;
var vol;

function setup() {
  createCanvas(500, 500);
  textSize(60);
  textAlign(CENTER);


  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {

  // get the sound input
  vol = (mic.getLevel()).toFixed(2);


  switch (state) {

    case 0:
      background('yellow');
      text("Shhh!!!", 250, 250);
      fill('black');

      // check how loud the input is
      if (vol > .080) { // if the volume is LOUD
        // do something
        state = 1;
      }

      break;

    case 1:
      background('orange');
      fill('black');
      text("QUIET DOWN!", 250, 250);

      timer++;
      if (timer > 200) {
        timer = 0;
        state = 0;
      }

      break;
  }
}

// function mouseReleased() {
// state++;
// if (state > 2) {
// state = 0;
// }
// }



// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
