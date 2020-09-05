// This is a canvas that is 400x400 with a face that smiles and frowns
// depending on whether or not the mouse is pressed!
// It does not work! The person who wrote this code was
// texting and driving at the same time!
// Can you fix it?


function setup() {
createCanvas(400, 400);
}

function draw() {
  // the background color
    if (mouseisPressed) {
      background('red');
    } else {
      background('blue');
    }

   // this ellipse should be 200x200 pixels in the center of the screen
    ellipse(200, 200, width/2, height/2);

    // the mouth - smile if pressed, frown otherwise
    if (mouseIsPressed) {
      arc(200, 210, 130, 100, 0, PI); // smile - (this line is correct)
    } else {
      arc(0, 270 130, 100, PIE, 0) ; // frown

    }

    // the eyes
    fill('white') ;
    ellipse(170, 180, 40, 40);
    ellipse(230, 180, 40, 40);




      if (mouseIsPressed) {
          print("for debugging")
          }

          text(mouseX + " , " + mouseY, 10, 20) ; // print mouse locations to canvas

    }
  }
  }



}
