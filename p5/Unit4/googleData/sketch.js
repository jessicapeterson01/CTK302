var bubbles = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1-tJygf7AmIMMZOJZ0kQvd_RfTf_NGRONmum3eDLxhBw';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
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
    bubbles.push(new Bubble(data[i]['Horror Movie'], data[i].Snack, data[i].Name, data[i].Fear)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myMovie, mySnack, myName, myFear) {
    this.movie = myMovie;
    this.snack = mySnack;
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

    ellipse(this.pos.x, this.pos.y, 125, 125);
    text(this.movie, this.pos.x, this.pos.y);
    text(this.snack, this.pos.x, this.pos.y-16);
    text(this.name, this.pos.x, this.pos.y+16);
    text(this.fear, this.pos.x, this.pos.y+40);
  }
drive() {
  this.pos.x += this.vel ;
  if(this.pos.x > width) this.pos.x = 0 ;
}

}
