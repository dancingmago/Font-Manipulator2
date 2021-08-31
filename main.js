function setup(){
    video = createCapture(VIDEO);
    video.size(750, 750);

    canvas = createCanvas(750, 750);
    canvas.position(770, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#E0B0FF");
}

function modelLoaded(){
    console.log("Model loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}