//THESE ARE WHERE THE VARIABLES FOR THE OPTIONS GO
var Background = 0;
var PlayerNum = 0;
var Difficulty = 0;  


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
		}
}
	

//Now we put health code here

var Health = function(x,y,hp){
	fill(37, 198, 45);
	this.x = x
this.y = y
this.hp = hp
	rect(this.x,this.y,this.hp,20)
};


//And here we will put the characters and prototypes
