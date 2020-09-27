 var x = 0;

 function setup() {
   createCanvas(500, 500) ;
   rectMode(CENTER) ;
 }

 function draw() {
   // make a rectangle halfway down screen, on left, 10x10
   background(10) ;
   // rect(x, 250, 10, 10) ;

   fill(random(255), random(255), random(255)) ;
   textSize(32) ;
   text("Sometimes you need\na little splash of color", x, 250) ;

   x += 2 ;

   if (x > width) {
     x = random (-500, -200) ;
   }

 }
