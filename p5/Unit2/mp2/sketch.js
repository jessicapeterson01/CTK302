let myState = 0 ;
var x = 0 ;
var pumpkin1 ;
var glow2 ;
var ghosts2 ;
let mic ;
var vol ;


function setup() {
  createCanvas(900, 750);
  pumpkin1 = loadImage("assets/pumpkin1.jpg") ;
  glow2 = loadImage("assets/glow2.png") ;
  ghosts2 = loadImage("assets/ghosts2.png") ;

  textSize(24);
  textAlign(CENTER);

  // code for initializing mic in .
  mic = new p5.AudioIn();
  mic.start();


}

function draw() {

  switch (myState) {

    case 0:
      image(pumpkin1, 0, 0);
      text("case 0", 250, 250);
      break;



    case 1:
      image(pumpkin1, 0, 0) ;
      image(ghosts2, 0, 0) ;
      text("case 1", 250, 250) ;
      // get the sound input
      vol = (mic.getLevel()).toFixed(2) ;
      if (vol >= .050) { // when person says BOO!
       myState = 2 ; 

      break;



    case 2:
         // pumpkin face lights up!
      image(pumpkin, 0, 0);
      image(glow2, 0, 0);
      text("case 2 words here", 250, 250);

      }


      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }

}

fill('white');
text(mouseX + " , " + mouseY, 10, 20); //this helps know where the mouse is



function touchStarted() {
  getAudioContext().resume();
}
