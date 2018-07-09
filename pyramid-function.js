0mid = function (x,y,r,g,b,s){
   scale(s);
    noStroke();
    fill(r,g,b);
  triangle(x,y,x+50,y+100,x-50,y+100);
   fill(r-75,g-75,b-75);
  triangle(x,y,x+50,y+100,x+75,y+75);
};
var x = 0;

draw = function () {
    pyramid(200,400,200,0,0,1);

};
