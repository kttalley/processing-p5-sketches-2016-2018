mTimer = 0;
var animalFarm = {
    
  draw:function(){
      frameRate(18);
    background(20,100,100);  
  },
};    

/*function Food (x,y,sze){
    this.x = x;
    var xSpeed = random(5,10);
    this.y = y;
    var ySpeed = random(5,10);
    this.sze = sze;
    var rotF = 0;
    this.draw = function() {
        translate(this.x,this.y);
        rotate(rotF);
        rectMode(CENTER);
        fill(250,150,0);
        rect(0,0,this.sze,this.sze);
        rectMode(CORNER);
        resetMatrix();
    };
    this.flee = function() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        rotF = rotF + 0.3;
        if(this.x > 1000){
            this.xSpeed = -this.xSpeed;
        }
        if(this.x<0){
            this.xSpeed = - this.xSpeed;
        }
        if(this.y<0){
            this.ySpeed = -this.ySpeed;
        }
        if(this.y>1000){
            this.ySpeed = -this.ySpeed;
        }
        
    };
}*/
function Food (x,y,sze){
    this.x = x;
    this.y = y;
    this.sze = sze;
    var rotF = 0;
    var xspd = 5;
    var yspd = 5;
    this.draw = function(){
        translate(this.x,this.y);
        fill(255,100,10);
        rectMode(CENTER);
        rotate(rotF);
        rect(0,0,this.sze,this.sze);
        rectMode(CORNER);
        resetMatrix();
        
    };
    this.flee = function () {
        this.x = this.x+ xspd;
        this.y = this.y + yspd;
         rotF = rotF + 0.1;
        if(this.x > 1000){
            xspd = - xspd;
        }
        if(this.x<0){
            xspd = - xspd;
        }
        if(this.y<0){
            yspd = - yspd;
        }
        if(this.y>1000){
            yspd = - yspd;
        }
    };
}
function Pet(x,y,p){
    this.x = x;
    var xSpeed = random(-5,5);
    this.y = y;
    var ySpeed = random(-5,5);
    //roam/boundary variables and animation timers.
    var roamU = false;
    var roamUTimer = 0;
    var roamD = false;
    var roamDTimer = 0;
    var roamL = false;
    var roamLTimer = 0;
    var roamR = false;
    var roamRTimer = 0;
    var rot = 0; //roatate variable
    
    var sze = random(10,36);
    this.p = p; //index of animals []
    var r = random(100,250);
    var g = random(100,250);
    var b = random(100,250);
    var animals = [
         "<:3 )~~~~", //mouse //0
         "<')))><", //fish //1
         "(^o w o ^)~~ " //cat //2
        
    ];
    var name = "";
    var age = random(14);
    var weight = age*3;
    
    var hungry = true;
    var hungerTimer = 1000;
    
    
    this.draw = function () {
        translate(this.x, this.y);
        fill(r,g,b);
        textSize(sze);
        rotate(rot);
        //ellipse(this.x,this.y,500,500);
        text(animals[this.p],0,0);  
        resetMatrix();
    };
    this.hunger = function () {
        if(hungry === false){
            sze = sze - 1;
            xSpeed = 0;
            ySpeed = 0;
        }
            
        };
    this.roam = function () {
        if(this.x>950){
            roamR = true;
            if(roamR === true){
                roamRTimer = roamRTimer + 1;
                if(roamRTimer < 100){
                    rot = rot + 0.03;
                    ySpeed = 0;
                    xSpeed = 0;
                }
                if(roamRTimer > 100){
                    this.x = 950;
                    xSpeed = random(-10,5);
                    ySpeed = xSpeed/3;
                    roamRTimer = 0;
                    roamR = false;
                }
            }
        }
        if(this.x<50){
            roamL = true;
            if(roamL === true){
                //roamTimer = 0;
                roamLTimer = roamLTimer + 1;
                if(roamLTimer < 100){
                    rot = rot + 0.03;
                    ySpeed = 0;
                    xSpeed = 0;
                }
                if(roamLTimer > 100){
                    //this.x = 50;
                    xSpeed = random(5,10);
                    ySpeed = xSpeed/3;
                    //roamTimer = 0;
                    roamLTimer = 0;
                    roamL = false;
                }
            }
        }
        if(this.y<50){
            roamU = true;
            if(roamU === true){
                //roamTimer = 0;
                roamUTimer = roamUTimer + 1;
                if(roamUTimer < 100){
                    rot = rot + 0.03;
                    ySpeed = 0;
                    xSpeed = 0;
                }
                if(roamUTimer > 100){
                    //this.x = 50;
                    ySpeed = random(5,10);
                    xSpeed = ySpeed/3;
                    //roamTimer = 0;
                    roamUTimer = 0;
                    roamU = false;
                }
            }
        }
        if(this.y>900){
            roamD = true;
            if(roamD === true){
                //roamTimer = 0;
                roamDTimer = roamDTimer + 1;
                if(roamDTimer < 100){
                    rot = rot + random(0.03,0.9);
                    ySpeed = 0;
                    xSpeed = 0;
                }
                if(roamDTimer > 100){
                    //this.x = 50;
                    ySpeed = random(-10,-5);
                    xSpeed = ySpeed/3;
                    //roamTimer = 0;
                    roamDTimer = 0;
                    roamD = false;
                }
            }
        }
        this.x = this.x + xSpeed;
        this.y = this.y + ySpeed;
    };
}

var pets = [
    new Pet(random(1000),random(1000),2),
    new Pet(random(1000),random(1000),1),
    new Pet(random(1000),random(1000),0),
    new Pet(random(1000),random(1000),1),
    new Pet(random(1000),random(1000),2)
    ];
var foods = [
    new Food(random(1000),random(1000),random(30)),
    new Food(random(1000),random(1000),random(30)),
    new Food(random(1000),random(1000),random(30)),
    new Food(random(1000),random(1000),random(30)),
    new Food(random(1000),random(1000),random(30)),
    new Food(random(1000),random(1000),random(30)),
    new Food(random(1000),random(1000),random(30))
    ];    
draw = function () {
    animalFarm.draw();
        for(var k = 0; k < pets.length; k++){
            for(var f = 0; f < foods.length; f++){
                foods[f].draw();
                foods[f].flee();
                pets[k].hunger();
                pets[k].roam();
                pets[k].draw();
                text(pets[k].roamTimer,500,500);
                if(dist(pets[k].x,pets[k].y,foods[f].x,foods[f].y)<50){
                   
                   foods[f].y = -100;
    
                    //pop food[f].x;
                }
            }
    
        }        
    
};
