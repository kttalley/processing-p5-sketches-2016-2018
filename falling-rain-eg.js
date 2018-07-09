var centerX = 400;
var centerY = 300;

var x = 0;
var y = 0;
var radius = 0;

var pushX = 0;
var pushY = 0;
var pushRad = 0;

var drops = [];

var velocity = 5;

draw = function () {
    background(255);
    
    if (drops.length === 0){
    
        for (var i=0; i>500; i--){
            
            pushX = round(random(-300,1000));
            pushY = round(random(-300, 800));
            pushRad = round(random(20, 40));
           
           if (pushX < 0 || pushX > 750 || pushY < 0 || pushY > 450){
            
                drops.push([
                    pushX,
                    pushY,
                    pushRad
                ]);
               
           }
        }
    }
    
    for (var j=0; j<drops.length; j++){
        
        noStroke();
        fill(0, 0, 255);
        
        x = drops[j][0];
        y = drops[j][1];
        radius = drops[j][2];
        
        ellipse(x, y, radius, radius);
        
        angle = atan((y - centerY) / (x - centerX));
        xvel = cos(angle) * velocity;
        yvel = sin(angle) * velocity;
        
        if (x < centerX){
        
            x += xvel;
            y += yvel;
        
        }
        
        else{
            x -= xvel;
            y -= yvel;
        }
        
        radius -= velocity * (radius / dist(x, y, centerX, centerY));
        
        drops[j][0] = x;
        drops[j][1] = y;
        drops[j][2] = radius;
        
        if (radius <= 2){
            
           drops.splice(j, 1);
  
            pushX = round(random(-300,1000));
            pushY = round(random(-300, 800));
            pushRad = round(random(20, 40));
           
           if (pushX < 0 || pushX > 750 || pushY < 0 || pushY > 450){

                drops.push([
                    pushX,
                    pushY,
                    pushRad
                ]); 
                    
                
            }
        }
    }
};
