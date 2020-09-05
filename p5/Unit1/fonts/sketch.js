var f;
var f1;

function setup() {
createCanvas(800, 800);

f = loadFont("assets/drybrush.ttf");
f1 = loadFont("assets/KGDropsofJupiter.ttf");

textAlign(CENTER);
}

function draw() {
background(150);
textFont(f);
textSize(100);
text("Jessica Peterson, Artist", width / 2, height / 2);

textFont(f1);
textSize(50);
text("If I'm not behind my camera, I'm probably messing with charcoal or paint."
width / 2, height / 2 + 70) ;

}
