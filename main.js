function setup(){
    canvas=createCanvas(600,550);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log ("poseNet is Initialized");
}

function draw(){
    image(video,0,0,600,550);
}

song="";
function preload(){
    song1= loadSound("a mere watan.mp3");
    song2= loadSound("khulke-jeene-ka.mp3");
}

leftWristX=0;
rightWristY=0;
rightWristX=0;
leftWristY=0;

function gotPoses(results){
     if(results.length > 0){
         console.log (results);
         leftWristX= results[0].pose.leftWrist.x;
         leftWristY= results[0].pose.leftWrist.y;
         console.log ("left wrist X = "+ leftWristX + "left wrist Y = " + leftWristY);

         rightWristX= results[0].pose.rightWrist.x;
         rightWristY= results[0].pose.rightWrist.y;
         console.log ("right wrist X = "+ rightWristX + "right wrist Y = " + rightWristY);
     }
     if(leftWristX >0,leftWristX <600,leftWristY >0,leftWristY <550){
         song1.play();
     }
     if(rightWristX >0,rightWristX <600,rightWristY >0,rightWristY <550){
        song2.play();
    }
}