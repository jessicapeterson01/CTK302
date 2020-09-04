var f;
function setup() {
createCanvas(800, 800);
f = loadFont("assets/whoaskssatan.ttf");
textAlign(CENTER);
}

function draw() {
background(100);
textFont(f);
textSize(200);
text("Jessica", width/2, height/2);
}
