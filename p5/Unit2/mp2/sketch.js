let myState = 0 ;
var x = 0 ;
var pumpkinscene ;
var glow800x600 ;
var leftghost ;
var rightghost ;
let mic;
var vol;
var thunder;



function preload() {
  pumpkinscene = loadImage("assets/pumpkinscene.jpg") ;
  glow800x600 = loadImage("assets/glow800x600.png") ;
  leftghost = loadImage("assets/leftghost.png") ;
  rightghost = loadImage("assets/rightghost.png") ;
  thunder = loadSound("assets/thunder.mp3") ;
}


function setup() {
  createCanvas(900, 750);
  thunder.loop();

  textSize(24);
  textAlign(CENTER);

  // code for initializing mic in .
  // mic = new p5.AudioIn();
  // mic.start();


}

function draw() {
  image(pumpkinscene, 0, 0);

  switch (myState) {

    case 0:
      image(pumpkinscene, 0, 0);

      fill('white');
      text("Click to begin", x, 200);
      x += 3;
      if (x > 800) {
        x = 0;
      }
      break;



    case 1:
      fill('white') ;
      text('case 1') ;

      // image(pumpkinscene, 0, 0);
      image(rightghost, 0, 0) ;
      image(leftghost, 0, 0) ;


      break;



    case 2:

      fill('white');
      text("Yell BOO!", 250, 250);
      // get the sound input
      vol = (mic.getLevel()).toFixed(2);
      if (vol >= .5) { // when person says BOO!
        myState = 2;
      }



    case 3:
    // pumpkin lights up!
    // image(pumpkinscene, 0, 0);
    image(glow800x600, 0, 0);
    fill('white') ;
    text("case 3", 250, 250);



      break;

  }
}

function mouseReleased() {
  myState++;
  if (myState == 0) {
    myState = 1;
  }

  if (myState == 4) {
    myState = 0;
  }
}

// fill('white');
// text(mouseX + " , " + mouseY, 10, 20); //this helps know where the mouse is



function touchStarted() {
  getAudioContext().resume();
}
