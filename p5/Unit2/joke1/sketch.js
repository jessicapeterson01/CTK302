let state = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(26);
}

function draw() {

  switch (state) {
case 0:
background('grey');
text("why did the vampire take an art class?", 250, 250);
break ;

case 1:
background('red');
text("because he wanted to learn how to draw blood", 250, 250);
break ;

  }
}


function mouseReleased() {
  state++;

  if (state > 1) {
    state = 0;

  }

}
