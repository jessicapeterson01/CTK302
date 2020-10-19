let cars = [];
let img1;

function setup() {
  createCanvas(500, 500);
  noStroke();
  img1 = loadImage("assets/sky2.jpeg");
  imageMode(CENTER);

  // for (let i = 0; i < 20; i++) {
    // cars.push(new Car());
  // }

}

function draw() {
  background('white');
  cars.push(new Car());
  image(img1, width/2, height/2);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0 ) {
      cars.splice(i, 1) ;
    }
  }
}

class Car {

  constructor() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(2), random(5));
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.a = random(200, 255) ;
    this.s = random(5, 50) ;
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a) ;
    // ellipse(this.pos.x, this.pos.y, this.s);
    text("WOW", this.pos.x, this.pos.y, 5);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
