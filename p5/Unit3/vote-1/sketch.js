let cars = [];
let f1, f2, f3;
let fonts = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/drip.ttf");
  f2 = loadFont("assets/snickles.ttf");
  f3 = loadFont("assets/djgross.ttf");

  fonts = [f1, f2, f3];


  // Spawn 20 objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background(100);

  // display and move 20 objects
  // "for loop"  cars.length is because the car will change when we delete a car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    // moves one car
  }
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
    this.font = fonts[floor(random(3))] ;
    // this is faster somehow? ^
  }

  // methods

  display() {
    // rect(this.pos.x, this.pos.y, 50, 25);
    textSize(this.size);
    fill(this.c);
    // textFont(fonts[this.font]);
    textFont(this.font);
    // ^ teacher switched it to this
    text("Paint!", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
