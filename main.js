var canvas = new fabric.Canvas('myCanvas');

block_image_width= 50;
block_image_height= 50;

block_X = 7;
block_Y = 7;

var player_object="";


function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:block_Y,left:block_X
    });
    canvas.add(block_image_object);
    });
}
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:block_Y,left:block_X
    });
    canvas.add(player_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=='80'){
        block_image_width = block_image_width +10;
        block_image_height = block_image_height +10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;

    }
    if(e.shiftKey==true && keypress=='77'){
        block_image_width = block_image_width -10;
        block_image_height = block_image_height -10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
        
    }

    if(keypress == '71'){
        new_image('green.png');
        console.log("g");
    }

    if(keypress == '82'){
        new_image('red.jpg');
        console.log("r");
    }
    if(keypress == '89'){
        new_image('yelllow.png');
        console.log("y");
    }
    if(keypress == '80'){
        new_image('pinkey.png');
        console.log("p");
    }
    if(keypress == '66'){
        new_image('blue.png');
        console.log("b");
    }
    
}