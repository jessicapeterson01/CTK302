var bubbles = [];
var img1;
var f;
var song1;

function preload() {
song1 = loadSound("assets/horror.mp3");
}

function setup() {
  f = loadFont("assets/treasure.ttf");
  textAlign(CENTER);
  // song1.play();
  song1.loop();


  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  // let url = '1-tJygf7AmIMMZOJZ0kQvd_RfTf_NGRONmum3eDLxhBw';
  let url = '1YOOkHw3e3jRCFOgxXODBSq9mG3SkQYUOzOigMtdK6o0';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 1000);
  img1 = loadImage('assets/filmstrip.png');
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Movie, data[i].Name, data[i].Fear)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background(190, 0, 0);
  fill('black');
  textFont(f);
  textSize(30);
  text('* Click for sound *', 500, 25);
  textSize(75);
  text('* What Are You Afraid Of *', 500, 115);
  textSize(50);
  text('Which Horror Movie Would You Watch', 500, 190);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// function mouseReleased() {
//
//   if (song1.isPlaying()) {
//     song1.pause();
//   } else {
//     song1.loop();
//   }


// my Bubble class
class Bubble {

  constructor(myMovie, myName, myFear) {
    this.movie = myMovie;
    // this.snack = mySnack;
    this.name = myName;
    this.fear = myFear;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);
  }


  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    // ellipse(this.pos.x, this.pos.y, 125, 125);
    image(img1, this.pos.x, this.pos.y, 185, 210);
    // text("I would watch:", this.pos.x+90, this.pos.y+165);
    textSize(18);
    text(this.movie, this.pos.x + 90, this.pos.y + 180);
    textSize(25);
    text(this.name, this.pos.x + 90, this.pos.y + 100);
    textSize(20);
    text(this.fear, this.pos.x + 90, this.pos.y + 125);
    // text(this.snack, this.pos.x, this.pos.y+32);
  }

  drive() {
    this.pos.y += this.vel;
    if (this.pos.y > height) this.pos.y = random(-400, -200); 
  }
}

function touchStarted() {
getAudioContext().resume();
}
