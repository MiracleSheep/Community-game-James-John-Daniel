
var currentScene = 1;
var img;
var defaultbackground;
var img1;
var img2;
var img3;
var imgp2w;
var imgp1w;
var imgc1;
var imgc2;
var imgc3;
var imgc4;
var sword;
var cnv;
var mrx = 0;
var mry = 0;
var mrx2 = 0;
var mry2 = 0;
var Background = 0;
var PlayerNum = 0;
var AD = 0;
var SD = 0;


function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 0;
    cnv.position(x, y);
}



function windowResized() {
    centerCanvas();
}


function setup() {

    cnv = createCanvas(500, 500);
    centerCanvas();
    background(0);
    img = loadImage("pictures/LogoMakr_0cfjro.png");
  defaultbackground = loadImage("pictures/download.jpg");
    img1 = loadImage("pictures/grassland01a_soruve.png");
    img2 = loadImage("pictures/japan_street01.png");
    img3 = loadImage("pictures/RealPow.png");
		imgp1w = loadImage("pictures/ShrekP1.jpg");
		imgp2w = loadImage("pictures/ShrekP2.jpg");
		imgc1 = loadImage("pictures/Player1.png");
		imgc2 = loadImage("pictures/Player2.png");
		imgc3 = loadImage("pictures/LEXUS.png");
		imgc4 = loadImage("pictures/Untitled-2.png")
		sword = loadImage("pictures/AC4_Altair's_Swords.png");
	  // Setting intial images for Characters
	  Lexus.setImg(imgc3);
	  Bandit.setImg(imgc1);
}

//THESE ARE WHERE THE VARIABLES FOR THE OPTIONS GO



var keys = [];

function keyPressed() {
keys[keyCode] = keyCode;
//console.log("Key Pressed: " + keyCode);
}

function keyReleased() {
keys[keyCode] = false;
//console.log("Key Released: " + keyCode);
}

function isCharPressed(aChar) {
 return isPressed(ascii(aChar));
}

function isPressed(aKey) {
 // 1. Get the list of currently pressed keys
// 2. See if "aKey" is in that list

pressedKeys = getNumberArray(keys);
for(var i = 0; i < pressedKeys.length; i++) {

if( pressedKeys[i] === aKey )
return true;
}

return false;
}

function ascii (a) { return a.charCodeAt(0); }

function getNumberArray(arr){
   var newArr = new Array();
   for(var i = 0; i < arr.length; i++){
       if(typeof arr[i] == "number"){
           newArr[newArr.length] = arr[i];
       }
   }
   return newArr;
}


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
    } else {
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
    return mouseX > this.x - this.width / 2 &&
        mouseX < (this.x + this.width / 2) &&
        mouseY > this.y - this.height / 2 &&
        mouseY < (this.y + this.height / 2);
};


optionButton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};


var EnergyBeam = function(config) {
    this.name = config.name;
	  this.R = config.R;
		this.G = config.G;
		this.B = config.B;
    this.X = config.X
		this.Y = config.Y;

	  this.startX = config.X;
	  this.startY = config.Y;
	  this.xLimit = config.xLimit;
	  this.direction = config.direction;	
	  
	  this.started = 0;
	  this.opponent = config.opponent;
};

EnergyBeam.prototype.startBeam = function(player) {
	this.X = player.x + 25;
	this.Y = player.y + 30;
	this.started = 1;
	
}

EnergyBeam.prototype.draw = function() {
	  if( this.started > 0 ) {
			
			fill(this.R,this.G,this.B);
			ellipse(this.X, this.Y, 20, 20);
			this.X += this.direction;
		}
    // How to end it.
	  if( this.direction > 0 && this.X > this.xLimit ) {
 			
			//this.started=0;
      //this.X=this.startX;
			this.reset();
		}
    // How to end it.
	  if( this.direction < 0 && this.X < this.xLimit ) {
 			
			// this.started=0;
      // this.X=this.startX;
			this.reset();
		}

	
}

EnergyBeam.prototype.reset = function() {
			this.started=0;
      this.X=this.startX;
      this.Y=this.startY;
}



//And here we will put the characters and prototypes
var character = function(config) {
	  this.name = config.name;
    this.color = config.color || 'blue';
    this.x = config.x; //x pos of character
    this.y = config.y; // y pos of character
    this.w = config.w; // width of character
    this.h = config.h; //height of character
    this.hp = config.hp;
    this.hy = config.hy;
    this.hx = config.hx;
    this.AX = config.AX;
    this.AY = config.AY;  
    this.energyBeam = config.energyBeam;
this.SX = this.x + 25;
	this.SY = this.y + 30;
};

character.prototype.draw = function() {
 
	
	  fill(this.color);
      image(this.img, this.x, this.y, this.w, this.h);
    //image(imgc1, this.x, this.y, this.w, this.h);
	
	
    fill(234, 247, 0);
    rect(this.hx, this.hy, this.hp, 20);
    //hitbox below  

		

		if (Lexus.hp <= 0) {
			currentScene = 5;	
			drawScene5();
		}	
  
  if (Bandit.hp  <= 0  ) {
			currentScene = 6;	
			drawScene6();
		}	
	
};

character.prototype.right = function(){

    
        this.x += 7;
  
  
}

character.prototype.left = function(){

  
   
        this.x -= 7;
    
}

character.prototype.hop = function() {

    if (this.y >= this.h) {
        this.y -= 7;
    }

};


character.prototype.fall = function() {

    if (this.y <= (500 - this.h)) {
        this.y += 5;
    }


};

character.prototype.setOpponent = function(theOpponent) {
  this.opponent = theOpponent;
};

character.prototype.setImg = function(anImage) {

  this.img = anImage;
};


character.prototype.startBeam = function() {
	this.energyBeam.startBeam(this);
};

character.prototype.continueBeam = function() {
	
	// When should this continue/stop
	this.energyBeam.draw();

	if( this.energyBeam.started > 0 ) {

	  if( this.energyBeam.X >=  this.opponent.x && this.energyBeam.X <= (this.opponent.x + 50) ) 
			if (  this.energyBeam.Y >= this.opponent.y &&  this.energyBeam.Y <= (this.opponent.y + 100) ) {
            this.opponent.hp -= AD;
				
				    // Scoring is done, end the beam
				    this.energyBeam.reset();
			}
	}
	
};


character.prototype.drawSword = function(player){
	this.SW = 100;
	this.SH = 50;
	image(sword,this.SX,this.SY,this.SW,this.SH);
if (this.SX >= this.opponent.x && this.SX <= (this.opponent.x += 50) && this.SY >= this.opponent.y && this.SY <= (this.opponent.y += 150) || this.SX <= this.opponent.x && this.SX >= (this.opponent.x += 50) && this.SY >= this.opponent.y && this.SY <= (tthis.opponent.y += 150)){
this.opponent.hp -= SD;
	
	

}
 
};

//And here we will put the characters and prototypes

var Lexus = new character({name:'Lexus',
    color: 'red',
    x: 50,
    y: 190,
    w: 50,
    h: 150,
		img: imgc1,								 
    hp: 150,
    hy: 30,
    hx: 100,

		
    energyBeam: new EnergyBeam({name: 'lexusBeam',
    R: 10, G: 201, B: 195 , Y: 400, X: 120,xLimit : 500, direction: 5 })	  

})

var Bandit = new character({name:'Bandit',
    x: 400,
    y: 190,
    w: 50,
    h: 150,
		img: imgc2,
    hp: 150,
    hy: 30,
    hx: 400,
	  energyBeam: new EnergyBeam({name: 'banditBeam',
    R: 252, G: 7 , B: 48 , Y: 400, X: 385, xLimit: 0, direction: -5 })	  

})


Lexus.setOpponent(Bandit);
Bandit.setOpponent(Lexus);
