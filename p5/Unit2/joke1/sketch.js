let state = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(26);
}

function draw() {

  switch (state) {
case 0:
background('orange');
text("why didn't the skeleton go\nto see a scary movie?", 250, 250);
break ;

case 1:
background('gray');
text("because he didn't have the guts.", 250, 250);
break ;

  }
}


function mouseReleased() {
  state++;

  if (state > 1) {
    state = 0;

  }

}
