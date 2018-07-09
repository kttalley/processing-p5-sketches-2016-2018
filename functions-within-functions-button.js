e;

button = function (x, y, roundness, title) {
    fill(125, 0, 125);
    rect(x, y, 100, 100, 75);
    textSize(40);
    fill(200);
    text(title, x, y);

    if (mouseX > x && mouseX < x + 100) {
        if (mouseY > y && mouseY < y + 100) {
            if (mousePressed) {
                active = true;

                if (active === true) {
                    if (mousePressed) {
                        active = false;
                    }
                }
            }
        }
    }
};

function pencil() {
    if (active) {
        if (mousePressed) {
            noFill();
            strokeWeight(random(0.1, 0.75));
            rect(mouseX, mouseY, 25, 25, random(50));
        }
    }
}

draw = function () {
    button(100, 100, 75, "pencil");
    pencil();
};
