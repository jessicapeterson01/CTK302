let timer = 0 ;
let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(32) ;
  textAlign(CENTER) ;
  rectMode(CENTER) ;
}

function draw() {

  switch(state) {

  case 0:
  background('gray') ;
  text("Why don't skeletons ever\ngo trick or treating?", 250, 250) ;
  // \n puts remaining text on the next line underneath
  // increment the timer variable
  timer++
  // if the timer var is greater than 200x200
  if (timer > 400) {
  // make it go to state 1
  state = 1 ;
  timer = 0 ;

}

  break ;

  case 1:
  background('orange') ;
  text("Because they have no-body to go with.", 250, 250, 400, 400) ;
  break ;

  }

}
