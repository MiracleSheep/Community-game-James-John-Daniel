
	    
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
   image(img, 0, 0, 500,500);

};

var drawScene2 = function(){
    currentScene = 2;
background(0, 0, 0);
	textSize(18);
	fill(250,0,0);
	text("Game Options",190,50);
	text("Arena",50,220);
	text("Difficulty",50,350);
	text("Or",240,275);
	text("Or",165,380);
	text("Or",300,380);
	text("Player Number",50,110);
	text("Or",240,170);
	

	Difficultyh.draw();
	Difficultym.draw();
	Difficultye.draw();
	CITY.draw();
	FIELDS.draw();
	P1.draw();
        P2.draw();
	Next.draw();
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


    if( keyIsPressed && keyCode === 13 && currentScene === 1){
      drawScene2();
	  
			
    }

     
}
