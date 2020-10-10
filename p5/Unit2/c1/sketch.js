let state = 0;
let x = 0;
var mic;
var vol;

function setup() {
  createCanvas(300, 300);
  textSize(24);
  textAlign(CENTER) ;


  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {

  // get the sound input
  vol = (mic.getLevel()).toFixed(2) ;


  switch (state) {

    case 0:
      background('pink') ;
      text("case 0", 150, 150) ;
      fill('black') ;
      textSize(15) ;
      text("click to activate sound\nand make some noise", 150, 250) ;

      // check how loud the input is
      if (vol > .010) { // if the volume is LOUD
        // do something
        x = x + 3;
      }
      fill('white');
      rect(x, 50, 25, 25);

      if (x > 300) {
        x = random(0, -200);
      }

      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 0) {
    state = 0;
  }
}



// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
