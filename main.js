leftx=0,rightx=0,difference=24;
function setup() {
    video = createCapture(VIDEO);
    video.size(600,400);
    video.position(20,185);
    c = createCanvas(500,400);
    c.position(660,185);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("Model Is Loaded");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftx=results[0].pose.leftWrist.x;
        rightx=results[0].pose.rightWrist.x;
        difference=Math.floor(leftx-rightx);
    }
}
function draw(){
    background("rgb(230, 230, 230)");
    textSize(difference);
    document.getElementById("size").innerHTML ="Font Size - "+difference+"px";
    fill('rgb(20, 20, 20)');
    text("Hello",250,200);
}