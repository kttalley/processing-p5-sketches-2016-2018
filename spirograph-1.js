meRate(10000);
var y = 0;
var r = 0;
var x = 0;
var speed = 0.5;
var fillRate = 0;
var timer = 0;
var opacity = 0; 
draw = function () {
    opacity = opacity + 0.1;
    translate(500,500);
    rotate(0.5+r);
    ellipseMode(CENTER);
    timer = timer +1;
    
    scale(0.5);
    fillRate = fillRate + 0.1;
    stroke(random(50,255),0,random(50,255),100-opacity);
    x = x + 0.0005;
    r = r + speed;
    y = y +2;
     strokeWeight(random(0.01,4)+x);
    //strokeWeight(random(.0001,.09));
    noFill();
    ellipse(500,500,400+r,500+y);
    ellipse(500,500,750+y,300+r);
    ellipse(500,500,200+r,700+y);
    ellipse(500,500,300+y,300+r);
    
 
 
if(opacity>150){
    opacity = 0;
}

if(timer>1000){
    fill(255);
//rect(1,1,2000,2000);    
}
};
