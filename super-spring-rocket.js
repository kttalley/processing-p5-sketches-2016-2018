
n (x, y) {
        noStroke();
        fill(0, 102, 153);
        triangle(x, y, x + 30, y, x + 15, y + 30);
        fill(130, 150, 153);
        triangle(x + 30, y - 30, x + 15, y + 15, x + 50, y + 15);
        fill(0, 102, 153);
        triangle(x + 30, y, x + 60, y, x + 45, y + 30);
    };

var smoke = function (x, y) {
        //x2 = x2
        fill(130, 150, 153, 100);
        triangle(x, y, x + 16, y, x + 8, y + 16);

        //sca
    };

var smokex = 0;

var smokey = 0;

var x = 250;

var y = 300;

var xmov = 0;

var move = 0;

var yvel = 0;

var gravity = 0;

var rate = 0.005;

var xrate = 1;

var timer = 0;

draw = function () {
    background(100);
    rocket(x, y);
    smoke(x + 20 + smokex, y + 20 + smokey);
    y = y + yvel;
    yvel = yvel + gravity;
    gravity = gravity + rate;

    if (y > 700) {
        yvel = yvel - 100;

        if (yvel > 700) {
            y = 700;  //makes a floor
            timer = 0;  //resets timer when block lands on ground
        }
    }

    if (keyCode === UP && keyPressed) {
        //smoke(x+20+smokex,y+20+smokey);
        //mokey = smokey + 1;
        if (timer <= 40) {
            yvel = -5;
            timer = timer + 1;  //allows jump to be held for varying amounts of time
        }

        if (timer <= 90) {
            yvel = -15;
            timer = timer + 3;
        }
    }
};
