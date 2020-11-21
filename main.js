canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
background_image_array = ["mars1.jpeg", "mars2.jpeg", "mars3.jpg", "mars4.jpg", "mars.jpg"]
rover_image = "rover.png";
var randomnumber=Math.floor(Math.random()*4)
background_image = background_image_array[randomnumber];
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);    
}
function uploadRover(){
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
var keypressed = e.keyCode;
console.log(keypressed);
if(keypressed == `38`){
    console.log("Up arrow was Pressed.");
up();
}
if(keypressed == `40`){
    console.log("Down arrow was Pressed.");
    down();
}
if(keypressed == `37`){
    console.log("Left arrow was Pressed");
    left();
}
if(keypressed == `39`){
    console.log("Right arrow was Pressed");
right();
}
}
function up(){
if (rover_y >=0){
    rover_y -=10;
    console.log("When Up arrow is pressed, The Position of Xpos of rover =" + rover_x + "The position of Ypos of rover =" + rover_y);
uploadBackground()
uploadRover()
}
}
function down(){
if (rover_y <=500){
    rover_y +=10
    console.log("When down arrow is pressed, the Xpos of rover =" + rover_x + "and the Ypos of Rover = " + rover_y);
    uploadBackground()
    uploadRover()
}
}
function left(){
if (rover_x >=0){
    rover_x -=10
    console.log("When left arrow is pressed, the Xpos of rover =" + rover_x + "and the Ypos of Rover = " + rover_y);
    uploadBackground()
    uploadRover()
}
}
function right(){
    if (rover_x <=700){
        rover_x +=10
        console.log("When right arrow is pressed, the Xpos of rover =" + rover_x + "and the Ypos of Rover = " + rover_y);
    uploadBackground()
    uploadRover()
    }
}
