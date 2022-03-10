function preload(){

}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,100,100,300,300);

fill("red");
stroke("red");
circle(30 , 30 , 40);
circle(475 , 30 , 40);
circle(30 , 475 , 40);
circle(475, 475 , 40);

fill("green");
stroke("green");
rect(50 , 20 , 410 , 20 )
rect(50 , 470 , 410 , 20 )
rect(20 , 44 , 20 , 410 )
rect(467 , 44 , 20 , 410 )
}