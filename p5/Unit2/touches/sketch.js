let numberOfTouches = 0 ;
var img1, img2, img3, img4, img5 ;


function setup() {
  createCanvas(700, 700) ;

  img1 = loadImage("assets/photography.png");
  img2 = loadImage("assets/charcoal.jpeg");
  img3 = loadImage("assets/Acrylic.jpeg");
  img4 = loadImage("assets/oil.jpeg");
  img5 = loadImage("assets/digital.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10) ;

  switch(numberOfTouches) {
    case 0:
      text("If I'm not behind my camera...", 5, 22) ;
      // put a picture here
      image(img1, width/2, height/2, 0, 0);
      break ;


      case 1:
       text("You might find me messing with charcoal", 5, 22) ;
      // put a picture here
      image(img2, width/2, height/2, 0, 0);
      break ;


      case 2:
      text("or paint...")
      // put a picture here
      image(img3, width/2, height/2, 0, 0);
      break ;


      case 3:
      text("My name is Jessica Peterson", 5, 22) ;
            // put a picture here
      image(img4, width/2, height/2, 0, 0);
      break ;


      case 4:
       text("and I am an artist.", 5, 22) ;
      // put a picture here
      image(img5, width/2, height/2, 0, 0);
      break ;


  }

}
