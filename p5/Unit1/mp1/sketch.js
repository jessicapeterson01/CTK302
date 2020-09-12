var f;
var song1;

function preload() {
  song1 = loadSound("assets/magicwand.mp3");

}


function setup() {
  createCanvas(700, 500);
  f = loadFont("assets/Betty.ttf");
  song1.pause();
}



function mousePressed() {
  song1.play();
}
function mouseReleased(){
  song1.pause();
}




function draw() {


  if (mouseIsPressed) {
    noStroke();
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

  // put your shapes here!




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





  // text for grass "Rain, rain, go away"

  fill('white') ;
  textFont(f) ;
  textSize(25) ;
  text("Rain, rain, go away.", 260, 465, 600, 400) ;




  stroke(0)

  // head
  fill(255, 235, 227);
  ellipse(350, 248, 130, 130);


  // left eye
  fill('black');
  ellipse(324, 240, 10, 10);
  line(320, 242, 311, 236);
  line(321, 240, 316, 234);
  line(323, 238, 319, 233);


  // right eye
  fill('black');
  ellipse(375, 240, 10, 10);
  line(379, 243, 389, 239);
  line(379, 240, 385, 236);
  line(378, 238, 382, 233);






  if (mouseIsPressed) {

    // smile
    arc(350, 260, 50, 50, 0, PI);

    // cheeks
    fill(232, 167, 191);
    ellipse(305, 261, 25, 25);
    ellipse(395, 261, 25, 25);

    // curly hair (right side) (first long lock)
    stroke(2);
    noFill();
    ellipse(396, 203, 17, 17);
    ellipse(403, 202, 15, 15);
    ellipse(409, 203, 13, 13);
    ellipse(417, 205, 11, 11);
    ellipse(423, 206, 11, 11);
    ellipse(428, 203, 10, 10);
    ellipse(431, 195, 11, 11);
    ellipse(433, 189, 11, 11);
    ellipse(440, 188, 11, 11);
    ellipse(446, 186, 11, 11);

    // filler hair around the head
    ellipse(402, 214, 14, 14);
    ellipse(406, 218, 14, 14);
    ellipse(387, 195, 13, 13);
    ellipse(384, 192, 12, 12);
    ellipse(374, 187, 12, 12);
    ellipse(368, 185, 12, 12);
    ellipse(357, 184, 12, 12);
    ellipse(355, 185, 12, 12);
    ellipse(348, 183, 12, 12);
    ellipse(337, 186, 12, 12);
    ellipse(329, 187, 12, 12);
    ellipse(324, 188, 12, 12);
    ellipse(316, 193, 12, 12);
    ellipse(294, 222, 11, 11);
    ellipse(287, 230, 10, 10);
    ellipse(285, 235, 10, 10);
    ellipse(285, 243, 10, 10);



    // banes
    ellipse(333, 197, 13, 13);
    ellipse(341, 197, 14, 14);
    ellipse(351, 198, 17, 17);
    ellipse(362, 196, 14, 14);
    ellipse(370, 193, 13, 13);



    // (curly hair) (right side) (second long lock)
    ellipse(412, 224, 16, 16);
    ellipse(418, 225, 16, 16);
    ellipse(428, 229, 15, 15);
    ellipse(433, 228, 13, 13);
    ellipse(442, 224, 13, 13);
    ellipse(446, 218, 12, 12);
    ellipse(449, 210, 10, 10);
    ellipse(453, 206, 10, 10);
    ellipse(458, 206, 9, 9);
    ellipse(464, 204, 9, 9);
    ellipse(467, 200, 8, 8);
    ellipse(472, 198, 7, 7);
    ellipse(475, 199, 6, 6);
    ellipse(474, 194, 6, 6);

    // curly hair (right side) (third lock)
    ellipse(418, 239, 16, 16);
    ellipse(422, 245, 14, 14);
    ellipse(430, 248, 11, 11);
    ellipse(436, 245, 11, 11);
    ellipse(441, 246, 11, 11);
    ellipse(447, 241, 10, 10);
    ellipse(452, 242, 10, 10);
    ellipse(457, 246, 10, 10);
    ellipse(461, 248, 10, 10);
    ellipse(467, 251, 10, 10);
    ellipse(471, 249, 9, 9);
    ellipse(474, 243, 9, 9);
    ellipse(477, 239, 9, 9);
    ellipse(480, 236, 8, 8);
    ellipse(485, 234, 8, 8);
    ellipse(488, 233, 7, 7);
    ellipse(494, 235, 7, 7);
    ellipse(417, 252, 10, 10);





    // curly hair (left side) (first lock)
    ellipse(308, 203, 17, 17);
    ellipse(302, 204, 16, 16);
    ellipse(297, 202, 15, 15);
    ellipse(291, 202, 15, 15);
    ellipse(284, 205, 14, 14);
    ellipse(278, 210, 13, 13);
    ellipse(275, 215, 12, 12);
    ellipse(267, 220, 12, 12);
    ellipse(261, 219, 11, 11);
    ellipse(257, 213, 11, 11);


    // left side (second lock)
    ellipse(294, 217, 15, 15);
    ellipse(285, 226, 14, 14);
    ellipse(281, 231, 14, 14);
    ellipse(279, 234, 13, 13);
    ellipse(272, 236, 10, 10);
    ellipse(267, 241, 10, 10);
    ellipse(261, 239, 10, 10);
    ellipse(257, 241, 10, 10);
    ellipse(252, 235, 9, 9);
    ellipse(250, 229, 9, 9);
    ellipse(247, 229, 9, 9);
    ellipse(243, 224, 8, 8);
    ellipse(239, 221, 8, 8);
    ellipse(235, 219, 8, 8);
    ellipse(233, 214, 7, 7);

    // left side (third lock
    ellipse(282, 252, 14, 14);
    ellipse(282, 260, 10, 10);
    ellipse(275, 252, 10, 10);
    ellipse(273, 255, 10, 10);
    ellipse(268, 258, 10, 10);
    ellipse(264, 259, 10, 10);
    ellipse(258, 256, 10, 10);
    ellipse(253, 255, 10, 10);
    ellipse(251, 251, 8, 8);
    ellipse(246, 253, 8, 8);
    ellipse(242, 247, 8, 8);
    ellipse(240, 243, 8, 8);
    ellipse(236, 238, 8, 8);
    ellipse(233, 236, 8, 8);









  } else {

    // eyebrows
    line(305, 232, 317, 222);
    line(395, 237, 381, 223);

    // mouth
    line(321, 277, 385, 277);

    // straight banes (left to right)
    // left banes

    strokeWeight(4);
    line(339, 182, 297, 196);
    line(342, 182, 303, 222);
    line(339, 182, 295, 213);
    line(339, 181, 296, 203);

    // right banes
    line(357, 184, 397, 223);
    line(361, 183, 395, 206);
    line(361, 183, 396, 200);


    // straight hair left side
    line(295, 212, 288, 285);
    line(295, 206, 282, 279);
    line(296, 206, 277, 264);
    line(296, 213, 296, 307);

    // straight hair right side
    line(397, 203, 422, 267);
    line(398, 202, 425, 250);
    line(397, 205, 413, 282);
    line(397, 202, 402, 326);


  }


  strokeWeight(1);
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




  stroke(0)
  strokeWeight(1)

  // puff sleeve (right)
  fill(255, 148, 193);
  ellipse(395, 325, 40, 40);


  // right arm
  fill(255, 235, 227);
  quad(406, 341, 412, 336, 431, 356, 427, 358);
  ellipse(432, 360, 10, 10);

  // left leg
  fill('white');
  quad(332, 401, 350, 401, 347, 447, 342, 447);

  // left shoe
  fill('black')
  ellipse(344, 450, 6, 6);

  // left shoe strap
  line(342, 443, 348, 443);

  // right leg
  fill('white');
  quad(353, 401, 374, 401, 364, 447, 359, 447);

  //right shoe
  fill('black')
  ellipse(361, 450, 6, 6);

  // right shoe strap
  line(359, 442, 364, 442);







  // fill('white') ;
  // text(mouseX + " , " + mouseY, 10, 20); //this helps know where the mouse is


  if (mouseIsPressed) {


  } else {

  // }

}

  function touchStarted() {
    getAudioContext().resume();

  }

}
