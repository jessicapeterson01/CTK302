function setup() {
  createCanvas(700, 500);
}

function draw() {



  if (mouseIsPressed) {
    background(22, 91, 219);
    fill(59, 122, 237);
    rect(0, 100, 700, 100);
    fill(115, 164, 255);
    rect(0, 200, 700, 120);


    // red
    fill(255, 94, 161);
    ellipse(350, 260, 650, 500);

    // orange
    fill(255, 153, 64);
    ellipse(350, 260, 630, 480);

    // yellow
    fill(255, 248, 56);
    ellipse(350, 260, 610, 460);

    // green
    fill(110, 235, 73);
    ellipse(350, 260, 580, 440);

    // blue
    fill(61, 173, 252);
    ellipse(350, 260, 560, 430);

    // purple
    fill(113, 19, 207);
    ellipse(350, 260, 540, 410);

    // blue sky
    fill(96, 195, 247);
    ellipse(350, 260, 520, 390);




  } else {
    background('gray');

    // raindrop 1
    fill(164, 211, 224);
    noStroke();
    ellipse(75, 175, 20, 20);
    fill(164, 211, 224);
    triangle(75, 146, 86, 176, 64, 176);


    // raindrop 2
    fill(164, 211, 224);
    noStroke();
    ellipse(163, 90, 10, 10);
    triangle(163, 75, 168, 91, 158, 91);


    // raindrop 3
    fill(164, 211, 224);
    noStroke();
    ellipse(106, 257, 12, 12);
    triangle(106, 240, 112, 259, 100, 259);


    // raindrop 4
    fill(164, 211, 224);
    noStroke();
    ellipse(180, 227, 13, 13);
    triangle(180, 208, 186, 227, 173, 228);


    // raindrop 5
    fill(164, 211, 224);
    noStroke();
    ellipse(234, 121, 9, 9);
    triangle(234, 107, 239, 122, 230, 122);





  }

  // put your shapes here!




  // grass
  fill('green') ;
  rect(0, 308, 700, 200) ;

  stroke(0)

  // head
  fill(255, 235, 227) ;
  ellipse(350, 248, 130, 130) ;


  // left eye
  fill('black') ;
  ellipse(324, 240, 10, 10) ;
  line(320, 242, 311, 236) ;
  line(321, 240, 316, 234) ;
  line(323, 238, 319, 233) ;


  // right eye
  fill('black') ;
  ellipse(375, 240, 10, 10) ;
  line(379, 243, 389, 239) ;
  line(379, 240, 385, 236) ;
  line(378, 238, 382, 233) ;






  if (mouseIsPressed) {
    // smile

    arc(350, 260, 50, 50, 0, PI) ;

    // cheeks
    fill(232, 167, 191) ;
    ellipse(305, 261, 25, 25) ;
    ellipse(395, 261, 25, 25) ;

  } else {

    // eyebrows
    line(305, 232, 317, 222) ;
    line(395, 237, 381, 223) ;

    // mouth
    line(321, 277, 385, 277) ;
  }

  // bow (left triangle)
  fill('pink');
  triangle(302, 158, 347, 177, 302, 187);

  // bow (right triangle)
  fill('pink');
  triangle(396, 162, 394, 187, 353, 179);

  // bow Center
  fill('pink');
  ellipse(350, 177, 20, 20);

  // neck
  fill(255, 235, 227);
  rect(342, 311, 20, 7);

  // dress top
  fill(255, 148, 193);
  quad(317, 318, 391, 318, 371, 352, 329, 350);

  // dress-skirt
  fill(255, 148, 193);
  quad(329, 349, 371, 349, 445, 400, 257, 400);

  // puff sleeve (left)
  fill(255, 148, 193);
  ellipse(304, 318, 40, 40);

  // left arm
  fill(255, 235, 227);
  quad(259, 287, 262, 280, 293, 302, 286, 313);

  // left hand
  fill(255, 235, 227);
  ellipse(257, 280, 18, 18);

  // wand stick
  fill(0);
  quad(209, 248, 211, 247, 254, 274, 251, 278);

  // wand star
  stroke('yellow');
  strokeWeight(3);
  line(185, 230, 209, 248);
  line(189, 248, 206, 228);
  line(181, 241, 213, 238);
  line(195, 227, 198, 252);
  strokeWeight(1);
  line(186, 218, 190, 226);
  line(203, 219, 200, 229);




  // triangle(193, 237, 220, 241, 202, 256) ;
  // fill('yellow') ;
  // triangle(208, 228, 211, 240, 204, 240) ;


  stroke(0)
  strokeWeight(1)

  // puff sleeve (right)
  fill(255, 148, 193) ;
  ellipse(395, 325, 40, 40) ;


  // right arm
  fill(255, 235, 227) ;
  quad(406, 341, 412, 336, 431, 356, 427, 358) ;
  ellipse(432, 360, 10, 10) ;

  // left leg
  fill('white');
  quad(332, 401, 350, 401, 347, 447, 342, 447) ;

  // right leg
  fill('white');
  quad(353, 401, 374, 401, 364, 447, 359, 447) ;

  //



  fill('white');
  text(mouseX + " , " + mouseY, 10, 20); //this helps know where the mouse is


  if (mouseIsPressed) {


  } else {

  }

}
