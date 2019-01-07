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



  //And here we will put the characters and prototypes
  var character = function(config) {
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
  };

			 character.prototype.draw = function() {
      fill(this.color);
      rect(this.x, this.y, this.width, this.height);
			fill(56, 188, 72); 
				rect(this.hx, this.hy, this.hp, 20);
				 if(Lexus.hp === 0){
				 Lexus.hp = 150;
				 }
				  if(Bandit.hp === 0){
				 Bandit.hp = 150;
				 }
				 //hitbox below  
				 if (Bandit.AX >= Lexus.x && Bandit.AX <= (Lexus.x + 50) && Bandit.AY >= Lexus.y && Bandit.AY <= (Lexus.y + 100)) {
         Lexus.hp -= this.AD;
				console.log("OWIE!!!");
      }
			 if (Lexus.AX >= Bandit.x && Lexus.AX <= (Bandit.x + 50) && Lexus.AY >= Bandit.y && Lexus.AY <= (Lexus.y + 100)) {
         Bandit.hp -= this.AD;
				console.log("OWIE!!!");
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

 
  character.prototype.EnergyBeam = function() {
		fill(10, 201, 195);
		ellipse(Bandit.AX,Bandit.AY,20,20);
		Bandit.AX -= 10;
		console.log("ENERYBEAM!")
		if(Bandit.AX === 0){
		Bandit.AX = 385;
		}
	};

  character.prototype.EnergyBeam2 = function() {
		fill(10, 201, 195);
		ellipse(Lexus.AX,Lexus.AY,20,20);
		Lexus.AX += 10;
		
		console.log("ENERYBEAM2!")
	};

  var Lexus = new character({
      color: 'red',
      x: 50,
      y: 190,
      width: 50,
      height: 150,
      //image(img4,this.x,this.y,60,160),
      hp: 150,
			hy:30,
			hx:10,
			AY:400,
			AX:120,
			AD:50
  })

  var Bandit = new character({
      x: 400,
      y: 190,
      width: 50,
      height: 150,
			//image(img5,this.x,this.y,60,160),
      hp: 150,
			hy:30,
			hx:340,
			AY: 400,
			AX:385,
			AD:50
		
  })
