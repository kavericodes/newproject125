noseX = 0;
noseY = 0;

leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(550,600);
    canvas.position(660,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX + "nose y = "+noseY);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("left wrist ="+leftWrist+"right wrist ="+rightWrist+"difference = "+difference);

    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function draw(){
    background("#0679B2");
    fill("#718BD3");
    square(noseX,noseY,difference);
    document.getElementById("square_size").innerHTML ="Width and height of the square will be = "+ difference;

}


