
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on("pose", gotPoses);
}

function modeloaded(){
    console.log("poseNet is initinilized");
}

function draw(){
    background("#808080");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}