let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn 20 objects -used to say "i < cars.length"
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }

}

function draw() {
  background(100);

  // display and move 20 objects (used to say "i < 20")
  for (let i = 0; i < 20; i++) {
    cars[i].display();
    cars[i].move();

  }
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));

  }

  // methods

  display() {
    rect(this.pos.x, this.pos.y, 50, 25);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
