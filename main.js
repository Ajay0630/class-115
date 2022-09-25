function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function takeSnapshot() {
    save("you-are-a-clown-now.png");
}

function modelLoaded() {
    console.log("Successful initialization.");
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        console.log("The nose's x coordinate is " + results[0].pose.nose.x);
        console.log("The nose's y coordinate is " + results[0].pose.nose.y);
    } else {
        console.error("No body found.");
    }
}