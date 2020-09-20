var f;
var x = 0 ;

function setup() {
  createCanvas(700, 500) ;
  f = loadFont("assets/Betty.ttf");
}

function draw() {
  if (mouseIsPressed) {
    // blue sky
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


    // raindrop 6
    fill(164, 211, 224);
    noStroke();
    ellipse(392, 53, 17, 17);
    triangle(392, 27, 401, 52, 384, 52);

    // raindrop 7
    fill(164, 211, 224);
    noStroke();
    ellipse(327, 132, 8, 8);
    triangle(327, 121, 330, 131, 323, 131);

    // raindrop 8
    fill(164, 211, 224);
    noStroke();
    ellipse(481, 72, 11, 11);
    triangle(481, 56, 486, 71, 476, 71);


    // raindrop 9
    fill(164, 211, 224);
    noStroke();
    ellipse(436, 165, 14, 14);
    triangle(436, 146, 443, 164, 429, 164);

    // raindrop 10
    fill(164, 211, 224);
    noStroke();
    ellipse(535, 131, 9, 9);
    triangle(535, 118, 539, 130, 531, 130);

    // raindrop 11
    fill(164, 211, 224);
    noStroke();
    ellipse(502, 195, 9, 9);
    triangle(502, 180, 507, 195, 498, 195);

    // raindrop 12
    fill(164, 211, 224);
    noStroke();
    ellipse(459, 270, 7, 7);
    triangle(460, 261, 462, 269, 456, 269);

    // raindrop 13
    fill(164, 211, 224);
    noStroke();
    ellipse(549, 244, 15, 15);
    triangle(549, 219, 556, 244, 542, 244);

    // raindrop 14
    fill(164, 211, 224);
    noStroke();
    ellipse(617, 55, 15, 15);
    triangle(617, 34, 625, 55, 610, 55);

    // raindrop 15
    // fill(164, 211, 224) ;
    // noStroke() ;
    // ellipse(287, 235, 9, 9) ;


    // raindrop 15
    // fill(164, 211, 224) ;
    // noStroke() ;
    // ellipse(511, 327, 15, 15) ;
    // triangle(511,


    // cloud 1
    fill(200);
    ellipse(255, 32, 60, 40);
    fill(200);
    ellipse(227, 37, 50, 25);
    fill(200);
    ellipse(280, 37, 40, 25);

}


    // grass
    fill('green');
    rect(0, 308, 700, 200);

    // flower 1
    fill(255, 250, 102);
    ellipse(229, 423, 15, 15);
    fill('red');
    ellipse(229, 422, 6, 6);
    stroke(67, 212, 19);
    line(230, 431, 230, 448);

    // flower 2
    noStroke();
    fill(255, 250, 102);
    ellipse(247, 432, 12, 12);
    fill('red');
    ellipse(247, 432, 6, 6);
    stroke(67, 212, 19);
    line(244, 436, 244, 448);

    // flower 3
    noStroke();
    fill(255, 250, 102);
    ellipse(215, 432, 13, 13);
    fill('red');
    ellipse(215, 432, 6, 6);
    stroke(67, 212, 19);
    line(219, 438, 220, 447);


    // flower 4
    noStroke();
    fill(255, 250, 102);
    ellipse(460, 435, 12, 12);
    fill('red');
    ellipse(460, 435, 6, 6);
    stroke(67, 212, 19);
    line(463, 441, 466, 449);


    // flower 5
    noStroke();
    fill(255, 250, 102);
    ellipse(475, 421, 15, 15);
    fill('red');
    ellipse(475, 421, 6, 6);
    stroke(67, 212, 19);
    line(474, 429, 473, 450);





    // text "Rain, rain, go away"

    fill('white');
    textFont(f);
    textSize(25);
    text("Rain, rain, go away.", 290, 465, 600, 400);








  noStroke() ;

  push() ;
  translate(x, 0) ;
  // rect(0, 250, 50, 50) ;
  avatar() ;
  x = x + 4 ;
  if (x > width){
    x = -300 ;
  }
  pop() ;

}
