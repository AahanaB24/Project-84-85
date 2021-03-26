canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 40;

car2_width = 100;
car2_height = 40;

background_img = "Canvasacetrack.jpg";

car1_img = "blueCar.png";
car2_img = "GSXizGu.png";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 50;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1();
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2();
    car2_imgTag.src = car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypressed = e.keyCode;
    if (keypressed == 38){
        Car1_Up()
        console.log("Car 1 - Up")
    }
    if (keypressed == 40){
        Car1_Down()
        console.log("Car 1 - Down")
    }
    if (keypressed == 37){
        Car1_Left()
        console.log("Car 1 - Left")
    }
    if (keypressed == 39){
        Car1_Right()
        console.log("Car 1 - Right")
    }
    if (keypressed == 87){
        Car2_Up()
        console.log("Car 1 - Up")
    }
    if (keypressed == 83){
        Car2_Down()
        console.log("Car 1 - Down")
    }
    if (keypressed == 65){
        Car2_Left()
        console.log("Car 1 - Left")
    }
    if (keypressed == 68){
        Car2_Right()
        console.log("Car 1 - Right")
    }
    
}

function Car1_Up(){
    if(car1_y>=0){
        car1_y -= 10
        console.log("When up arrow is pressed: x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car1_Down(){
    if(car1_y <= 500){
        car1_y += 10
        console.log("When down arrow is pressed: x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car1_Left(){
    if(car1_x >= 0){
        car1_x -= 10
        console.log("When left arrow is pressed: x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car1_Right(){
    if(car1_x <= 700){
        car1_y += 10
        console.log("When right arrow is pressed: x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_Up(){
    if(car2_y>=0){
        car2_y -= 10
        console.log("When up arrow is pressed: x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_Down(){
    if(car2_y >= 0){
        car2_y += 10
        console.log("When down arrow is pressed: x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_Left(){
    if(car2_x >= 0){
        car2_x -= 10
        console.log("When left arrow is pressed: x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function Car2_Right(){
    if(car2_x <= 700){
        car2_x += 10
        console.log("When right arrow is pressed: x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
