var drawShape = function (x, y, w, h) {
    var r = Math.floor((Math.random() * 255) + 1);
    var g = Math.floor((Math.random() * 255) + 1);
    var b = Math.floor((Math.random() * 255) + 1);
    fill(r, g, b);
    rect(x - w, y - h, 2 * w, 2 * h);

    fill(r, b, g);
    ellipse(x, y, 2 * w, 2 * h);

    var w = w / 2;
    var h = h / 2;

    if (w >= 2) {
        drawShape(x, y, w, h);
    }

};

drawShape(width / 2, height / 2, 380, 380);
