
var img;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 0;
  cnv.position(x, y);
}



function windowResized() {
  centerCanvas();
}



var currentScene = 1;


function setup() {
  cnv = createCanvas(500, 500);
  centerCanvas();
  background(255, 0, 200);
  img = loadImage("pictures/Startscreen.jpeg"); 
}
function draw(){

var drawScene1 =function(){
    currentScene = 1;
    background(200, 175, 175);
   image(img, 100, 100, 400,400);

};

var drawScene2 = function(){
    currentScene = 2;
background(0, 0, 0);
	textSize(18);
	fill(250,0,0)
	text("Game Options",125,50);

};
	
var drawScene3 = function(){
    currentScene = 3;
background(0, 51, 255);

};

var drawScene4 = function(){
    currentScene = 4;
background(255, 255, 255);
};
var drawScene5 =function(){
    currentScene = 5;
    background(150, 150, 175);
};
  
if(currentScene ===1){
drawScene1();
}

mouseClicked=function(){
    if( keyIsPressed && keyCode === 13 && currentScene === 1){
      drawScene2();  
    }
    else if( keyIsPressed && keyCode === 13 && currentScene === 5){
     drawScene1();  
    }
     else if( keyIsPressed && keyCode === 13 && currentScene === 2){
     drawScene3();  
    }
     else if( keyIsPressed && keyCode === 13 && currentScene === 3){
     drawScene4 ();
     
     }
     else if(keyIsPressed && keyCode === 13 && currentScene === 4){
     drawScene5 ();
     
     }
};


}
