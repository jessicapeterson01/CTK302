var mic;
var vol;
var c = 'purple' ;
let x = 0 ;


function setup() {
  createCanvas(600, 400);


  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .010) { // if the volume is LOUD?
    // do something
  c = color(random(0), random(0), random(255)) ; // here I'm setting the background to a random color
  x = x + 1 ;
  }
  fill(random(0), random(255), random(100)) ;
  ellipse(200, 200, x, x) ;
  ellipse(100, 200, x, x) ;
  ellipse(50, 200, x, x) ;
  ellipse(500, 250, x, x) ;
  ellipse(300, 300, x, x) ;
  ellipse(450, 30, x, x) ;
  ellipse(400, 75, x, x) ;


  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
