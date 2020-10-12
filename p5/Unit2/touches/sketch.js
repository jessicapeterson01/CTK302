let numberOfTouches = 0;
var img1, img2, img3, img4, img5;


function setup() {
  createCanvas(700, 700);

  img1 = loadImage("assets/photography.png");
  img2 = loadImage("assets/charcoal.jpeg");
  img3 = loadImage("assets/Acrylic.jpeg");
  img4 = loadImage("assets/oil.jpeg");
  img5 = loadImage("assets/digital.jpg");
  img6 = loadImage("assets/Jessicapainting.jpeg");

  imageMode(CENTER);
  textSize(24);

}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("If I'm not behind my camera...", 30, 22);
      // put a picture here
      image(img1, width / 2, height / 2, 0, 0);
      break;


    case 1:
      text("You might find me messing with charcoal", 30, 22);
      // put a picture here
      image(img2, width / 2, height / 2, 0, 0);
      break;


    case 2:
      text("or stroking a canvas with paint...", 30, 22);
      // put a picture here
      image(img3, width / 2, height / 2, 0, 0);
      break ;


    case 3:
      // digital painting
      text("My name is Jessica Peterson", 30, 22);
      image(img5, width / 2, height / 2, 0, 0);
      break;


    case 4:
      text("And I am an Artist.", 30, 22);
      // umbrella photo
      image(img6, width / 2, height / 2, 0, 0);
      break;

  }

}
