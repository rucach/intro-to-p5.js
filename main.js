function preload(){
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(600, 350);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 100, 150, 150);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(20, 20, 360, 5);
    rect(20, 380, 365, 5);
    rect(20, 20, 5, 360);
    rect(380, 20, 5, 360);
    rect(40, 20, 5, 360);
    rect(20, 40, 360, 5);
    fill(0, 111, 100);
    stroke(21, 100, 0);
    circle(360, 360, 30);
    circle(360, 320, 30);
    circle(320, 360, 30);
}

function take_snapshot(){
    save('arnaw.png');
}