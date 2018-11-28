	//this is the button function for the options
	var optionButton = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 84;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    this.onClick = config.onClick || function() {};
};


optionButton.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(255, 255, 255);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};


optionButton.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};



	//this is the button function for the options
	var optionButton = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 84;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    this.onClick = config.onClick || function() {};
};


optionButton.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(255, 255, 255);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};


optionButton.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};



optionButton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
	    this.onClick();
		}
}
	    
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
	fill(250,0,0)
	text("Game Options",190,50);
	text("Arena",50,200);
	text("Difficulty",50,350);
	text("Or",250,225);
	

var CITY = new optionButton({


	x:200  ,
    y: 220,
    width: 50,
    height: 20,
    color: color(255),
    label: "City"
	

});
	
	var FIELDS = new optionButton({


	x:320  ,
    y: 220,
    width: 50,
    height: 20,
    color: color(255),
    label: "Fields"
	

});
	
	CITY.draw();
	FIELDS.draw();

		};
	var mouseClicked = function{
	CITY.handleMouseClick();
	FIELDS.handleMouseClick();
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
     
}
