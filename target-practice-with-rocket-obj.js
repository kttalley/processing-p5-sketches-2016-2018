<html>

<script>
    new p5();
stars = [
    new Stars(random(1000),random(300),random(5)),new Stars(random(1000),random(300),random(5)),new Stars(random(1000),random(300),random(10)),new Stars(random(1000),random(300),random(5)),new Stars(random(1000),random(300),random(5)),new Stars(random(1000),random(300),random(10))];

projectiles = [];

enemies = [new Enemy(1000,300,5), new Enemy(1400,400,5),new Enemy(1600,200,5)];

var Rocket = {
    x: 500,
    y: 500,
    
    timer: 0,
    xvel: 20,
    yvel: 0,
    gravity: 0,
    rate: 1,
    fuel: 700,
    
    
    
    rocketL: function (){
        translate(this.x, this.y);
        noStroke();
        fill(0,102,153);
        triangle(0,0,30,0,15,30);
        fill(130,150,153);
        triangle(30,-30,15,15,50,15);
        fill(0,102,153);
        triangle(30,0,60,0,45,30);
        //rocket smoke
        fill(130,150,153,100);
        triangle(15,25+this.timer/500,50,25+this.timer/500,32.5,random(25,55)+this.timer/50);
        resetMatrix();
    },
    rocketR: function (){
      translate(this.x, this.y);
      noStroke();
      fill(0,102,153);
      triangle(30,0,60,0,45,30);
      fill(130,150,153);
      triangle(30,-30,15,15,50,15);
      fill(0,102,153);
      triangle(0,0,30,0,15,30);
      //rocket smoke
      fill(130,150,153,100);
      triangle(15,25+this.timer/500,50,25+this.timer/500,32.5,random(25,55)+this.timer/50);
      resetMatrix();
    },
    rocketLaunch: function() {
    /*if(keyCode == RIGHT){
       projectiles.push(new Projectiles(Rocket.x+30,Rocket.y-35,3,5)); 
        fill(0);
        rect(this.x-25,this.y-55,400,400);
        this.yel = 25;
        this.x = this.x +this.xvel;
        this.rocketR();
    
    }    */
        
    if(keyCode == RIGHT && keyPressed){
        fill(0);
        rect(this.x-25,this.y-55,400,400);
        this.yel = 25;
        this.x = this.x +this.xvel;
        this.rocketR();
    }
    if(keyCode == LEFT && keyPressed){
        fill(0);
        rect(this.x-25,this.y-55,400,400);
        this.x = this.x -this.xvel;
        this.rocketL();
    }
         //gravity stuff
    this.y = this.y + this.yvel;
    this.yvel = this.yvel + this.gravity; 
    this.gravity = this.gravity + this.rate;
    if(this.y > 900){
        this.y = 900;
        this.timer = 0;
                }
     if(keyCode === UP && keyPressed){
       fill(random(100,255),random(100,120),random(150),random(100,200));
       triangle(this.x+10,this.y+30+this.timer/100,this.x+30,this.y+random(40,50)+this.timer/25,this.x+50,this.y+30+this.timer/100);
       fill(random(190,255),random(120,220),random(150),random(50,150));
       triangle(this.x,this.y+30+this.timer/200,this.x+30,this.y+random(3,50)+this.timer/25,this.x+60,this.y+30+this.timer/200);
          
          if(this.timer < 5){
           this.yvel = -50;
           this.timer = this.timer + 1;
           this.fuel = this.fuel -1;
       }
       if(this.timer >= 5){
          this.yvel = -20;
          this.timer = this.timer + 3;
          this.fuel = this.fuel -1;
       }
    if(this.timer>=30){
        this.yvel = -5.5;
        this.timer = this.timer + 1; //allows jump to be held for varying amounts of time
        this.fuel = this.fuel -2;
        
    }
        if(this.timer >= 50){
            this.yvel = -2.75;
            this.timer = this.timer +3;
            this.fuel = this.fuel -3;
        }
            //if(timer >= 100){
            //yvel = -0.75;
           // timer = timer + 3;
       // }
        if(this.timer >= 200){
            
            this.yvel = 0.25;
            this.timer = this.timer +3;
            this.fuel = this.fuel -4;
        }
        if(this.timer >= 1300){
            this.yvel = 1;
            this.timer = this.timer +3;
            this.fuel = this.fuel -5;
        }
        if(this.timer >= 1500){
            fill(0);
       triangle(this.x-15,this.y+15+this.timer/1000,this.x+45,this.y+80+this.timer/25,this.x+60,this.y+15+this.timer/1000);
            this.yvel = 15;
            this.timer = this.timer +3;
        }
        if(this.timer >= 1600){
            this.yvel = 40;
            this.timer = this.timer +3;
        }
       
      }
      else{
          this.yvel = 40;
          this.timer = 0;
      }
    },
    
};

function Projectiles (x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.step = function() {
        //this.x += this.speed;
        this.y -=this.speed;
        
    };

    this.draw = function () {
      fill(255,255,0);
      ellipse(this.x,this.y,this.size,this.size);
      fill(255,255,0,25);
      ellipse(this.x,this.y,this.size+22,this.size+22);
    };
    
}

function Stars(x,y,speed){
 this.x = x;
 this.y = y;
 this.speed = speed;
    this.draw = function(){
      fill(255);      
      ellipse(this.x,this.y,5,5);
      fill(255,255,255,150);      
      ellipse(this.x,this.y,10,10); 
      fill(255,255,255,100);      
      ellipse(this.x,this.y,15,15); 
      fill(255,255,255,50);      
      ellipse(this.x,this.y,20,20);
    };
    this.move = function(){
        this.y = this.y + this.speed;
        if(this.y > 1000){
            this.y = 0;
        }
    };
}

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
      triangle(this.x + 25, this.y, this.x + 50, this.y - 25, this.x - 75, this.y + 25);
    };
    this.move = function(){
        this.x = this.x - this.speed;
        if(this.x < 0){
            this.x = 1500;
        }
    };
    this.onscreen = function(){
            return (this.x > 0);
    };
    
    
}



/*
function Projectile (x, y, dir, speed) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.speed = speed;
    this.step = function () {
        // this is the method which moves the bullets
        // it uses the exact same logic as how the player moves
        // since velocity is a vector the sine and cosine find the
        // vertical and horizontal proportions of the current angle
        // and they are multiplied by the speed to find the respective
        // amounts of x and y velocity
        
        this.x += cos(this.dir) * this.speed;
        this.y += sin(this.dir) * this.speed;
        
       };
       
    this.draw = function () {
      
      fill(255,255,0);
      ellipse(this.x,this.y,3,3);
      fill(255,255,0,25);
      ellipse(this.x,this.y,25,25);
      
       
    };
    
}
*/
var projectilesInd = random(20);
var enemiesInd = random(20);
var boom = 10;
var points = 0;
var timer = 0;
draw = function () {
    background(0);
    for(var k = 0; k<stars.length; k++){
        stars[k].draw();
        stars[k].move();
        //stars[k].push(new Stars(random(1000),0,random(5)));
    }
    // this is called to draw the player to the screen initially
    // since it is not really apart of the draw function itself, the method
    // inside of the player class must be specifically called
    Rocket.rocketR();
    Rocket.rocketLaunch();
    //Rocket's projectile and collission
    for( var j = 0; j<enemies.length; j++) {
       
            enemies[j].draw();
            enemies[j].move();
         for(var i = 0; i< projectiles.length;i++) {    
            projectiles[i].draw();
            projectiles[i].step();
            
            // this loops through every projectile in current list of
            // projectiles and draws them and moves them with their specific
            // speeds
            
  
    
     
             if(dist(projectiles[i].x, projectiles[i].y, enemies[j].x, enemies[j].y)<50){
                //background(255,0,0);
                boom = boom + 15;
                
                //enemies.splice(random(j));
               
                timer = timer + 1;
                if(timer<25){
                 fill(0);
                rect(enemies[j].x-100,enemies[j].y-100,200,200);
                fill(255,255,0);
                ellipse(enemies[j].x,enemies[j].y,boom,boom);
                fill(255,255,0,100);
                ellipse(enemies[j].x,enemies[j].y,boom+50,boom+50);   
                }
                if(timer>25){
                    points = points + 1;
                    timer = 0;
                }
                if(boom>500){
                    boom = 10;
                }
            }
        }
    }
    
    if(keyCode == CONTROL){
        
    }
    
    if(key == ' ' && keyPressed){
        projectiles.push(new Projectiles(Rocket.x+30,Rocket.y-35,3,5));  
    }
    fill(255,255,0,50);
    textSize(40);
    text("Points:"+points,150,500);
    fill(255,255,0);
    textSize(24);
    text("Points:" +points,150,500);
};
</script>
</html>