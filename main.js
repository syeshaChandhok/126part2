function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(350,200);
    video=createCapture(VIDEO);
    video.hide();
   
}
function draw(){
   image(video,0,0,500,500);
}
