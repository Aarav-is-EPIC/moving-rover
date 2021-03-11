canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
images_array = ["nasa image-1.jpeg","nasa image 2.jpeg","nasa image 3.jpeg","nasa image 4.jpeg"];
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
rover_image = "rover.png";
random_image_number_generater =Math.floor(Math.random() * 4);
console.log(random_image_number_generater);
background_image = images_array[random_image_number_generater];
console.log("background_image = " + background_image);
function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;
    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed==38){
        up();
        console.log ("Up");
    }
    if (keypressed==40){
        down();
        console.log("Down");
    }
    if (keypressed==39){
        right();
        console.log("Right");
    }
    if(keypressed==37){
        left()
        console.log("Left");
    }
}
function right(){
    if(rover_x<=900){
        rover_x=rover_x + 10;
        console.log("X =  "+ rover_x + "Y =  " + rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x - 10;
        console.log("X =  " + rover_x + "Y =  " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y - 10;
        console.log("X =  " + rover_x + "Y =  " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=700){
        rover_y=rover_y + 10;
        console.log("X =  "+ rover_x + "Y =  " + rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
