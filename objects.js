
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
	

var P1 = new optionButton({


	x:200  ,
    y: 160,
    width: 50,
    height: 20,
    color: color(221, 51, 51),
    label: "1",
	
onClick: function() {
PlayerNum = 1;
		
		
}

});
	
var P2 = new optionButton({


	x:300  ,
    y: 160,
    width: 50,
    height: 20,
    color: color(13, 107, 229),
    label: "2",
		onClick: function() {
PlayerNum = 2;
	
}

});

var CITY = new optionButton({


	x:200  ,
    y: 270,
    width: 50,
    height: 20,
    color: color(165, 165, 155),
    label: "City",
		onClick: function() {
Background = 1;
}

});
	
	var FIELDS = new optionButton({


	x:300  ,
    y: 270,
    width: 50,
    height: 20,
    color: color(219, 226, 13),
    label: "Fields",
		onClick: function() {
Background = 2;
}

});
	
	var Difficultye = new optionButton({


	x:100  ,
    y: 400,
    width: 70,
    height: 50,
    color: color(144, 234, 18),
    label: "Normal",
	onClick: function() {
Difficulty = 1;
}

});
	
	var Difficultym = new optionButton({


	x:250  ,
    y: 400,
    width: 70,
    height: 50,
    color: color(211, 229, 13),
    label: "Overkill",
	onClick: function() {
 Difficulty = 2;
}

});
	
	var Difficultyh = new optionButton({


	x:400  ,
    y: 400,
    width: 135,
    height: 50,
    color: color(244, 176, 66),
    label: "Death Sentence",
		onClick: function() {
Difficulty = 3;
}

});
	
		var Next = new optionButton({


	x:430  ,
    y: 460,
    width: 60,
    height: 20,
    color: color(255),
    label: "NEXT",
				onClick: function() {

}
	

});
