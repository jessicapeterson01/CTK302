let cars = [];
// let f1, f2, f3;
// let fonts = [];
// let fall ;
let canvas ;
let colormyworld ;
let lose ;
let winner ;
let frogPos;
let state = 0;
let maxCars = 3 ;
let timer = 0 ;
var paintbrush ;
var redpaint ;
var red ;
var orange ;
var yellow ;
var green ;
var darkblue ; 
let song1 ;
let song2 ;
let song3 ;

function preload() {
  song1 = loadSound("assets/applause.mp3") ;
  song2 = loadSound("assets/lose.mp3") ;
  song3 = loadSound("assets/fairytale.mp3") ;
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600);
  rectMode(CENTER);
  frogPos = createVector(width / 2, height - 80);
  // imageMode(CENTER) ;
  lose = loadImage("assets/lose.jpg") ;
  winner = loadImage("assets/winner.jpg") ;
  paintbrush = loadImage("assets/paintbrush.png") ;
  redpaint = loadImage("assets/redpaint.png") ;
  red = loadImage("assets/red.png") ;
  orange = loadImage("assets/orange.png") ;
  yellow = loadImage("assets/yellow.png") ;
  green = loadImage("assets/green.png") ;
  darkblue = loadImage("assets/darkblue.png") ;
  canvas = loadImage("assets/canvas.jpg") ;
  colormyworld = loadImage("assets/colormyworld.jpg") ;
  // f1 = loadFont("assets/drip.ttf");
  // f2 = loadFont("assets/snickles.ttf");
  // f3 = loadFont("assets/djgross.ttf");
  // fall = loadImage("assets/fallPic.jpg");
  // fonts = [f1, f2, f3];
  // textAlign(CENTER) ;



  // Spawn objects
  // for (let i = 0; i < maxCars; i++) {
    // cars.push(new Car());
  // }
}


function draw() {

  switch (state) {
    case 0:
    // image for the welcome screen
    image(colormyworld, 0, 0, 800, 600) ;
    song1.pause() ;
    song2.pause() ;
    // background(100) ;
    // text("Welcome to my game", width/2, height/2) ;

      break;

    case 1:
      game();
      song1.pause() ;
      song2.pause() ;
      timer++ ;
      if (timer > 20*60) {
      state = 3 ;
    }
      break;

    case 2:
    // background('red') ;
    // textFont() ;
    // text("hooray you won!", width/2, height/2) ;
    image(winner, 0, 0, 800, 600) ;
    if (!song1.isPlaying()) {
        song1.play();
      }
      break;

    case 3:
    // background('purple') ;
    // textFont() ;
    // text("boo you lost", width/2, height/2) ;
    image(lose, 0, 0, 800, 600) ;
    if (!song2.isPlaying()) {
          song2.play();
        }
    break;

  }

  // game();

}

function game() {
  // background(100); put game background here!
  // image(fall, 0, 0, width, height);
  image(canvas, 0, 0, 800, 800);

  // display and move 20 objects
  // "for loop"  cars.length is because the car will change when we delete a car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    // ^ moves one car
    // check to see if it's close to the frog! splice has frog eat it!
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

if (cars.length == 0) {
  state = 2 ; // they won!
}

// draw the frog (or the avatar)
  // fill('green');
  // ellipse(frogPos.x, frogPos.y, 50, 50);
  image(paintbrush, frogPos.x, frogPos.y) ;
  checkForKeys();

  // checkforkeys stays in draw loop so computer always calls it during game
  // if put in setup, the computer only calls it once
}

function resetTheGame() {
  cars = [] ;
  // respawn Cars
  timer = 0 ;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}


function mouseReleased() {
  // if (state == 0) state = 1 ;
  // ^ code Barret put for his
  switch(state) {
    case 0:
    state = 1 ; // the game state
    break ;

    case 1: // they can't click out of game
    break ;

    case 2: // the win state
    resetTheGame() ;
    state = 0 ; // let them go to the menu screen again
    break ;

    case 3: //  the lose state
    resetTheGame() ;
    state = 0 ;
    break ;


  }
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {

  // constructor and attributes
  // let every "car" have its own characteristic
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-6, 6), random(-6, 6));
    this.size = random(30, 80);
    this.c = random(255);
    // ^ color
    // this.font = floor(random(3));
    // this.font = fonts[floor(random(3))];
    // this is faster somehow? ^
  }

  // methods

  display() {
    image(redpaint, this.pos.x, this.pos.y, 50, 25);
    image(red, this.pos.x, this.pos.y, 50, 25) ;
    image(orange, this.pos.x, this.pos.y, 50, 25) ;
    image(yellow, this.pos.x, this.pos.y, 50, 25) ;
    image(green, this.pos.x, this.pos.y, 50, 25) ;
    image(darkblue, this.pos.x, this.pos.y, 50, 25) ;

    // rect(this.pos.x, this.pos.y, 50, 25);
    // textSize(this.size);
    // fill(this.c);
    // textFont(fonts[this.font]);
    // textFont(this.font);
    // ^ teacher switched it to this
    // text("Paint!", this.pos.x, this.pos.y);
    // ^ change text to image for the game
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function touchStarted() {
    getAudioContext().resume();
  }
