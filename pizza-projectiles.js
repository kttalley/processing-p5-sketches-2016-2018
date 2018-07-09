namme: 'Sukh Singh',
  x: 100,
  y: 200,
  speed: 5,
  INV: [],
  charc: function(){
      fill(255,155,0);
      noStroke();
      rect(this.x,this.y,50,50,50,50,0,0);
      fill(255,255,0);
      rect(this.x+15,this.y+10,5,5,20);
      rect(this.x+25,this.y+20,5,5,20);
      rect(this.x+35,this.y+10,5,5,20);
      rect(this.x+15,this.y+35,25,5,10);
  },
  moves: function(){
    //   if(keyCode === RIGHT && keyPressed){
    //       this.x = this.x + this.speed;
    //   }
    //   if(keyCode === LEFT && keyPressed){
    //       this.x = this.x - this.speed;
    //   }
      if(keyCode === DOWN && keyPressed){
          this.y = this.y + this.speed;
      }
      if(keyCode === UP && keyPressed){
          this.y = this.y - this.speed;
      }
  },
  boundaries: function(){
      if(this.y <  50){
          this.y = 50;
      }
      if(this.y > 650){
          this.y = 650;
      }
  }

};
var place1 = function(){
  fill(0,204,153);
  rect(0,0,1000,25);
  rect(0,0,25,1000);
  rect(0,675,1000,25);
  rect(975,0,25,1000);
};
function Enemy(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.draw = function(){
      fill(250,250,0);
      stroke(153,102,51);
      strokeWeight(5);
      ellipse(this.x, this.y,50,50);
      noStroke();
      fill(255,0,0);
      ellipse(this.x-10,this.y-20,5,5);
      ellipse(this.x+10,this.y+20,5,5);
      ellipse(this.x-15,this.y+20,5,5);
      ellipse(this.x-7,this.y-8,5,5);
      ellipse(this.x+7,this.y+8,5,5);
      ellipse(this.x-20,this.y+10,5,5);
      ellipse(this.x+20,this.y,5,5);
      ellipse(this.x,this.y+10,5,5);
      ellipse(this.x-20,this.y+10,5,5);
    };
    this.move = function(){
        this.x = this.x - this.speed;
    };
    this.onscreen = function(){
            return (this.x > 0);
    };
    
    
}
   

var enemy = [new Enemy(1000,300,5), new Enemy(1400,400,5),new Enemy(1600,200,5)]; 
  
var points = 0;
    
  




draw = function () {
    background(220);
    place1();//this is our function for landscape
    obj.charc();
    obj.moves();
    obj.boundaries();
    textSize(50);
    fill(255,255,0);
    text(obj.HP,750,120);
    for(var i = 0; i < enemy.length; i++){
        enemy[i].draw();
        enemy[i].move();
        if(enemy[i].onscreen() === false){
        enemy.splice(i,1);
        enemy.push(new Enemy(1000,random(50,620),random(5,10)));
        obj.HP = obj.HP - 1;
    }
    if(dist(enemy[i].x, enemy[i].y, obj.x, obj.y+15)< 50){
        obj.HP = obj.HP + 1;
        enemy.splice(i,1);
        enemy.push(new Enemy(1000,random(50,620),random(5,10)));
    }
        
    
    }
    if(obj.HP < 0){
        fill(255,0,0);
        text("You Lost - Try Again",300,400);
        
    }
    if(obj.HP > 35){
        fill(255,0,0);
        text("You won! - Level 2?" , 300, 400);
        frameRate(100);
    }
    
    
    
};
