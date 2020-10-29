let myCar1;
let myCar2;
let myCar3;

function setup() {
  createCanvas(500, 500);
  myCar1 = new Car();
  myCar2 = new Car();
  myCar3 = new Car();
  rectMode(CENTER);
}

function draw() {
  background('gray');
  myCar1.display();
  myCar2.display();
  myCar3.display();

  myCar1.move();
  myCar2.move();
  myCar3.move();
}

class Car {

  constructor() {
    // attributes
    // to combine x and y together
    this.pos = createVector(random(width), random(height));

    // code below makes cars go in diff. directions
    this.vel = createVector(random(-5, 5), random(-5, 5));

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.w = random(40, 60);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 50, 25);
    fill('black');
    ellipse(this.pos.x - 20, this.pos.y + 15, 15) ;
    ellipse(this.pos.x + 20, this.pos.y + 15, 15) ;
  }

  move() {
    // this line of code below makes cars go diff. directions
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
