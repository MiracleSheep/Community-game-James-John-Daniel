//THESE ARE WHERE THE VARIABLES FOR THE OPTIONS GO
var Background = 0;
var PlayerNum = 0;
var Difficulty = 0;

/*
MAKE KEY PRESSED AT SAMETIME STUFF HERE. URL TO WEB HERE: https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
     insert conditional here 
}
*/
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
    this.X = config.X;
	  this.startX = config.X;
	  this.Y = config.Y;
	  this.xLimit = config.xLimit;
	  this.direction = config.direction;	
	  //console.log("New EnergyBeam " + this.name);
	  this.started = 0;
	  this.opponent = config.opponent;
};

EnergyBeam.prototype.startBeam = function() {
	this.started = 1;
	// console.log("startBeam " + this.name);
}

EnergyBeam.prototype.draw = function() {
	  if( this.started > 0 ) {
			//console.log("EnergyBeam.draw " + this.name + " " + this.X);
			fill(this.R,this.G,this.B);
			ellipse(this.X, this.Y, 20, 20);
			this.X += this.direction;
		}
    // How to end it.
	  if( this.direction > 0 && this.X > this.xLimit ) {
 			//console.log("EnergyBeam.draw Limit " + this.name + " " + this.xLimit);
			//this.started=0;
      //this.X=this.startX;
			this.reset();
		}
    // How to end it.
	  if( this.direction < 0 && this.X < this.xLimit ) {
 			//console.log("EnergyBeam.draw Limit " + this.name + " " + this.xLimit);
			// this.started=0;
      // this.X=this.startX;
			this.reset();
		}

}

EnergyBeam.prototype.reset = function() {
			this.started=0;
      this.X=this.startX;
}
//And here we will put the characters and prototypes
var character = function(config) {
	  this.name = config.name;
    this.color = config.color || 'blue';
    this.x = config.x; //x pos of character
    this.y = config.y; // y pos of character
    this.width = config.width; // width of character
    this.height = config.height; //height of character
    this.img = config.img; //put img of character that user selects
    this.hp = config.hp;
    this.hy = config.hy;
    this.hx = config.hx;
    this.AD = config.AD;
    this.AX = config.AX;
    this.AY = config.AY;  
    this.energyBeam = config.energyBeam;
};

character.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    fill(56, 188, 72);
    rect(this.hx, this.hy, this.hp, 20);
    //hitbox below  
  

		if (Lexus.hp <= 0 || Bandit.hp  <= 0  ) {
			currentScene = 5;	
			drawScene5();
		}	
	
};


character.prototype.hop = function() {

    if (this.y >= this.height) {
        this.y -= 7;
    }

};


character.prototype.fall = function() {

    if (this.y <= (500 - this.height)) {
        this.y += 5;
    }


};

character.prototype.setOpponent = function(theOpponent) {
  this.opponent = theOpponent;
};


character.prototype.startBeam = function() {
	this.energyBeam.startBeam();
};

character.prototype.continueBeam = function() {
	// console.log("continueBeam " + this.energyBeam);
	// When should this continue/stop
	this.energyBeam.draw();

	if( this.energyBeam.started > 0 ) {
    // console.log(this.energyBeam + " X,Y " + this.energyBeam.X + "," + this.energyBeam.Y  + " Trying to Score on [ x,y ]  [" + this.opponent.x, "," + this.opponent.y + "]");
	  if( this.energyBeam.X >=  this.opponent.x && this.energyBeam.X <= (this.opponent.x + 50) ) 
			if (  this.energyBeam.Y >= this.opponent.y &&  this.energyBeam.Y <= (this.opponent.y + 100) ) {
            this.opponent.hp -= this.AD;
						console.log(this.energyBeam.name + " Score on " + this.opponent.name + " hp: " + this.opponent.hp)
				    // Scoring is done, end the beam
				    this.energyBeam.reset();
			}
	}
	
};


//And here we will put the characters and prototypes

var Lexus = new character({name:'Lexus',
    color: 'red',
    x: 50,
    y: 190,
    width: 50,
    height: 150,
    //put img here when done
    hp: 150,
    hy: 30,
    hx: 10,
    AY: 400,
    AX: 120,
    AD: 5,
    energyBeam: new EnergyBeam({name: 'lexusBeam',
    R: 10, G: 201, B: 195 , Y: 400, X: 120,xLimit : 500, direction: 5 })	  
})

var Bandit = new character({name:'Bandit',
    x: 400,
    y: 190,
    width: 50,
    height: 150,
    //PUT IMG HERE WHEN DONE
    hp: 150,
    hy: 30,
    hx: 340,
    AY: 400,
    AX: 385,
    AD: 5,
	  energyBeam: new EnergyBeam({name: 'banditBeam',
    R: 252, G: 7 , B: 48 , Y: 400, X: 385, xLimit: 0, direction: -5 })	  

})


Lexus.setOpponent(Bandit);
Bandit.setOpponent(Lexus);

