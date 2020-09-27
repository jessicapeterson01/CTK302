let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/magicalgravity.mp3");
  song2 = loadSound("assets/nightsnow.mp3");
  song3 = loadSound("assets/smokinsticks.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(400, 400);



}

function draw() {

  background(100);

  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
    background('blue') ;
      text("listen to song1", 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
    background('purple') ;
      text("listen to song2", 100, 100);
      break;

    case 4:
      song3.play();
      state = 5;

    case 5:
    background('yellow') ;
      text("listen to song3", 100, 100);
      break;



  }
}

function mouseReleased() {
  state++;
  if (state > 5) state = 0;

  song1.pause();
  song2.pause();
  song3.pause();

}


// added code for sound --keep at bottom
function touchStarted() {
  getAudioContext().resume();
}
