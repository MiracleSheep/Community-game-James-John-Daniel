

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
   // 	  console.log("Filling all white");
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
};
	

//Now we put health code here

var Health = function(x,y,hp){
	fill(37, 198, 45);
	this.x = x
this.y = y
this.hp = hp
	rect(this.x,this.y,this.hp,20)
};


//And here we will put the characters and prototypes
var character = function(config) {
	this.color = config.color || 'blue';
	this.x = config.x;
	this.y = config.y;
	this.width = config.width;
	this.height = config.height;
	this.up = config.up;
	this.down = config.down;
};

character.prototype.draw = function() {
  fill(this.color);
	// console.log(this.x,this.y,this.width,this.height);
 //   image(this.img, this.x, this.y, 40, 40);
	rect(this.x,this.y,this.width,this.height);
};

character.prototype.hop = function() {
//    this.img = getImage("creatures/Hopper-Jumping");
	
	  if( this.y >= this.height ) {
      this.y -= 7;
		}
   // console.log("hop " + this.y);
};

character.prototype.fall = function() {
 //   this.img = getImage("creatures/Hopper-Happy");
  if( this.y <= ( 500 - this.height ) ) {
	  this.y += 5;
	}
   // console.log("fall " + this.y);

};

var Lexus = new character ({
	color: 'red',
	x:100,
		y:200,
		width:50,
		height:50,
		up:50,
		down:50
	})

	var Bandit = new character ({
		x:300,
		y:200,
		width:50,
		height:50,
		up:50,
		down:50
	
	
	})
	
