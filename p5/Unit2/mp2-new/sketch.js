let state = 0 ;
let timer = 0 ;
let song1 ;
var x = 0 ;
var f ;
var hauntedhouse ;
var glow800 ;
var leftghost2 ;
var rightghost2 ;
var blackcats ;
var thunder2 ;
var howl ;
var mic ;
var vol ;



function preload() {
hauntedhouse = loadImage("assets/hauntedhouse.jpg") ;
leftghost2 = loadImage("assets/leftghost2.png") ;
rightghost2 = loadImage("assets/rightghost2.png") ;
glow800 = loadImage("assets/glow800.png") ;
blackcats = loadImage("assets/blackcats.png") ;
thunder2 = loadSound("assets/thunder2.mp3") ;
howl = loadSound("assets/howl.mp3") ;
song1 = loadSound("assets/evillaugh.mp3") ;

}


function setup() {
  createCanvas(800, 600) ;
  thunder2.loop() ;
  howl.play() ;
  f = loadFont("assets/octobercrow.ttf") ;



  textSize(24) ;
  textAlign(CENTER) ;



  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
image(hauntedhouse, 0, 0) ;


// get the sound input
// vol = (mic.getLevel()).toFixed(2);




switch(state) {

case 0:
image(hauntedhouse, 0, 0) ;

fill('white') ;
text('Click to begin', x, 200) ;
textFont(f) ;
textSize(50) ;

x += 3 ;
if (x > 800) {
  x = 0 ;
}
break ;




case 1:
fill('white') ;
textFont(f) ;
textSize(40) ;
text("It was a dark\nand stormy night", 600, 100) ;

// increment the timer variable
timer++
// if the timer var is greater than 200x200
if (timer > 200) {
state = 2 ;
timer = 0 ;
}

// not using this code
 // if (vol > .010) { // if the volume is LOUD?
  // make ghosts move
 // x = x + 1 ;
  // if (x > 800) {
  // x = 300 ;
// }

image(rightghost2, 0, 0, x) ;

image(leftghost2, 0, 0) ;

break ;




case 2:
fill('white') ;
textFont(f) ;
textSize(50) ;
text('Yell BOO!', 600, 100) ;
// get the sound input
vol = (mic.getLevel()).toFixed(2);
// check how loud the input is
  if (vol > .030) { // if the volume is LOUD?
    // do something
  state = 3 ;

  }
break ;




case 3:
// pumpkin lights up
image(glow800, 0, 0) ;
image(blackcats, 0, 0) ;


// fill('yellow') ;
// text('Happy Halloween!', 600, 100) ;

 // timer++
 // if the timer var is greater than 200x200
 // if (timer > 600) {
 // state = 0 ;
 // timer = 0 ;

break ;

 }
}



function mouseReleased() {
  state++ ;
  if (state > 3) {
  state = 0;
 }
}

function touchStarted() {
getAudioContext().resume() ;
}
