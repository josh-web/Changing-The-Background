var r = 0;
var g = 150;
var b=255;


function setup(){

  createCanvas(1200,400);
}


function draw(){
  r=map(mouseX,0,1200,0,255);
  g =map(mouseX,mouseY,50,900,50,100);
  b= map(mouseX,mouseY,0,1200,255,0);
  background(r,g,b);
  fill(255);
  ellipse(mouseX,mouseY,60,60);
}