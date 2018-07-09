cape = function(){
    scale(1.5);
    background(235);
    noStroke();
    fill(223);
    //backmost hills
    bezier(600,350,600,300,700,250,1100,350);
    fill(190,190,190,200);
     quad(10,400,1100,450,1150,500,1000,400);
    fill(215);
    bezier(0,400,600,250,890,350,1000,400);
    fill(199);
    rect(0,550,1000,500);
    bezier(0,550,300,450,450,425,1000,550);
    //sky
    fill(250);
    rect(0,0,1000,100);
    fill(255,255,255,200);
    rect(0,25,1000,100);
     fill(250,250,250,100);
    rect(0,50,1000,100);
    fill(250,250,250,50);
    rect(0,75,1000,100);
    fill(250,250,250,25);
    rect(0,100,1000,100);
    
};

function Tree(x,y,sze){
    this.x = x;
    this.y = y;
    this.sze = sze;
    var xSpeed = 5;
    this.draw = function(){
        fill(0);
        ellipse(this.x,this.y,this.sze/2,this.sze);
    };
    this.move = function () {
      this.x = this.x + this.xSpeed;
    };
}

var trees = [
    new Tree(1100,random(450,750),random(100,300)),
    new Tree(1100,random(450,750),random(100,300)),
    new Tree(1100,random(450,750),random(100,300)),
    new Tree(1100,random(450,750),random(100,300)),
    new Tree(1100,random(450,750),random(100,300)),
    new Tree(1100,random(450,750),random(100,300)),
    new Tree(1100,random(450,750),random(100,300))
    ];

var x = 0;
var y = 0;
draw = function () {
    x = x - 0.5;
    //translate(x,y);
    //idahoLandscape();
    //resetMatrix();
    fill(0);
    for(var t = 0; t < trees.length; t++){
        trees[t].draw();
        trees[t].move();
    }
    
};
