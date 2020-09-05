var img1, img2, img3 ;


function setup() {
createCanvas(800, 800) ;

img1 = loadImage("photos/puddie.jpg") ;
img2 = loadImage("photos/charcoal.jpg") ;
img3 = loadImage("photos/scarystories.jpg") ;


imageMode(CENTER) ;
}

function draw() {
background(100) ;

image(img3, width/2, height/2, 200, 300) ;
image(img1, width/2, height/2 - 275, 300, 200) ;
image(img2, width/2, height/2 + 275, 300, 200) ;

}
