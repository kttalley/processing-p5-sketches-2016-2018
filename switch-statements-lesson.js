w = function () {
    background(255);
    rect(x,y,25,25);
    if (keyPressed) {
        switch (key) {
            case 'a':
                x = x -5;
                rect(100,100,100,100);
                break;
            case 's':
                y = y + 5;
                ellipse(400,100,100,100);
                break;
            case 'd':
                x = x + 5;
                rect(100,400,100,100);
                break;
            case 'w' :
                y = y - 5;
                break;
                case 'q' :
                    y = y - 5;
                    x = x - 5;
                    break;
                    case 'e' :
                        x = x + 5;
                        y = y - 5;
                        break;
            default:
                ellipse(400,400,100,100);
        }
    }
};
