 song = "";
 song1 = "";

 leftWristX = 0;
 leftWristY = 0;
 rightWristX = 0;
 rightWristY = 0;

 scoreleftWrist = 0;
 scorerightWrist = 0;

 songStatus = "";

 function setup() {
    canvas = createCanvas(600, 550);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
 function preload() {
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
    }
    
    function draw() {
        image(video, 0, 0, 600, 550);
        fill("#FF0000");
        stroke("FF0000");
        if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        }
    }
    
    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }

    function gotPoses(results) {
        if(results.length > 0)
        {
            console.log(results);
            scoreleftWrist = results[0].pose.keypoints[9].score;
            console.log("scoreLeftWrist =" +scoreleftWrist)
    
            scorerightWrist = results[0].pose.keypoints[10].score;
            console.log("scorerightWrist =" +scorerightWrist)
    
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX =" + leftWristX +" leftWristY ="+ leftWristY)
            
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("rightWristX =" + rightWristX +" rightWristY ="+ rightWristY)  
        }
    }