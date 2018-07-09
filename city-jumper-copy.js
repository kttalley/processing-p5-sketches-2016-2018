scores = {
    player: ['sukh: 7456','Kristian','Harley'],  
    
};



var charc = {
  x: 150,
  y: 100,
  r:0,
  spin: 0,
  draw:function () {
    translate(this.x,this.y);
    rectMode(CENTER);
    rotate(this.r);
    this.r = this.r + this.spin;
    rect(0,0,50,50);
    
    rectMode(CORNER);
    resetMatrix();
 },
};

var flip = 0; 
var x = 100;
var y = 100;
var yspeed = 0;
var grav = 1;
var timer = 3;
var lives = 30;
var score = 0;
var scorePlus = 0;
var fall = false;

var holex = 1000;
var holey = 350;

var holex2 = 1900;
var holey2 = 350;

var loseScreen = false;
var intro = false;
var game = true;

draw = function () {
    if(game === true && loseScreen === false){
        scorePlus = 1;
        background(100);
        fill(200);
        
        if(fall === false && charc.r>0){
            score = score + scorePlus;
        }
        textSize(40);
        text("Lives: "+lives,600,100);
        if (lives<1){
            loseScreen = true;
        }
        if(charc.y>400){
            fall = true;
        }
        text("Score: "+score,100,100);
        rect(0,350,1500,600);
        noStroke();
        fill(100);
        //hole
        rect(holex-20,holey,250,300);
        holex = holex - 10;
        if(holex<-350){
            holex = 1000;
        }
        if(dist(charc.x,charc.y,holex,holey)<30){
            fall = true;
            yspeed = 10;
        }
        rect(holex2-10,holey2,150,300);
        holex2 =holex2 -10;
        if(holex2<-200){
            holex2 = 1300;
        }
        if(dist(charc.x,charc.y,holex2,holey2)<20){
            fall = true;
            yspeed = 10;
        }
        rectMode(CENTER); //sets our x,y to the mid
        //character
        fill(255);
        charc.draw();
        rectMode(CORNER);
        //gravity and jump
        charc.y = charc.y + yspeed;
        yspeed = yspeed + grav;
        if(mousePressed){
          charc.spin = 0.3;
            if(timer<=1){
                timer = timer +1;
                //charc.spin = 0.4;
                yspeed = -15;
            }
        }
        if(fall === false){
            if(charc.y > 350){
                charc.y = 350;
                if(charc.y === 350){
                timer = 0;
                charc.spin = 0;
                charc.r = 0;
                } 
            }
        }
        if(fall === true){
            if(mousePressed){
                charc.spin = 0.3;
                if(timer<=1){
                    timer = timer +1;
                    //charc.spin = 0.4;
                    yspeed = -15;
                }
                if(dist(charc.x,charc.y,holex,holey)>40){
                    fall = false;
                }
                if(dist(charc.x,charc.y,holex2,holey2)>40){
                    fall = false;
                }
            }
            
            if(charc.y>600){
                background(255,0,0);
                charc.y = 600;
                if(charc.y === 600){
                    lives = lives - 1;
                    charc.x = 100;
                    charc.y = 100;
                    fall = false;
                    timer = 0;
                }    
            }
    }    
    if(loseScreen === true){
        scorePlus = 0;
        background(0);
        textSize(36);
        fill(255);
       
        text("You're PARKOUR days are at an end..",100,250);
        fill(255,20,50);
        text("Your high score: " + score,200,350);
        fill(100);
        rect(200,375,300,100,100);
        fill(255);
        text("Try again?",265,425);
        
        if(mouseX>200 && mouseX<500){
            if(mouseY>375 && mouseY<475){
                if(mousePressed){
                loseScreen = false;
                game = true;
                }
            }
        }
    }
}
};
