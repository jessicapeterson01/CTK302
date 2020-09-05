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
textSize(80);
text("Jessica Peterson", width / 2, height / 2);

textFont(f1);
textSize(30);
text("If I'm not behind my camera", width / 2, height / 2 + 90) ;

textFont(f1);
textSize(30);
text("I'm probably messing with charcoal or paint.", width / 2, height / 2 + 135) ;

}
