
var beam = function() {
    image(imgc2,470, mry, 30, 100);
    fill(35, 211, 211);
    ellipse(mrx, mry, 40, 40);

    mrx -= 10;

    if (mrx < -100) {

        mrx = 500;
        mry = random(0, 400);

    }
    fill(0);
    image(imgc1,0, mry2, 30, 100);
    fill(35, 211, 211);
    ellipse(mrx2, mry2, 40, 40);

    mrx2 += 10;

    if (mrx2 > 500) {

        mrx2 = 0;
        mry2 = random(0, 400);

    }
    if (mrx >= mrx2 - 40 / 2 && mrx <= (mrx2 + 40 / 2) && mry >= mry2 - 40 / 2 && mry <= (mry2 + 40 / 2)) {
        image(img3, mrx, mry, 100, 100);
    }

    if (mrx2 >= 470 && mrx2 <= 500 && mry2 >= mry && mry2 <= (mry + 100)) {
        image(img3, mrx2 - 30, mry - 30, 100, 100);
    }

    if (mrx <= 30 && mrx >= 0 && mry >= mry2 && mry <= (mry2 + 100)) {
        image(img3, mrx - 30, mry - 30, 100, 100);
    }

};


var drawScene1 = function() {
    currentScene = 1;
    background(255);
    image(img, 100, 150, 300, 120);
    fill(0);
    text("Press Enter to Start!", 200, 300);
    text("Made by John Khalife, Daniel Figotin and James Yee", 110, 480);
    beam();
};

var drawScene3 = function() {
    currentScene = 3;
    background(255);
		
  if (Background === 0) {
        image(defaultbackground, 0, 0, 500, 500);
    }
    if (Background === 1) {
        image(img2, 0, 0, 800, 500);
    }
    if (Background === 2) {
        image(img1, 0, 0, 800, 500);
    }
	
	

    Lexus.draw();
    Bandit.draw();

};

var drawScene4 = function() {
    currentScene = 4;
    background(255, 255, 255);
};

var drawScene5 = function() {
    currentScene = 5;
    background(150, 150, 175);
  image(imgp2w ,0, 0, 500, 500);
  	
};

var drawScene6 = function() {
    currentScene = 6;
    background(150, 150, 175);
  image(imgp1w, 0, 0, 500, 500);
  	
};

var drawScene2 = function(event) {

    currentScene = 2;


    var CITY = new optionButton ({


        x: 180,
        y: 250,
        width: 50,
        height: 20,
        color: color(165, 165, 155),
        label: "City",
        onClick: function() {
            Background = 1;
          
        }

    });

    var FIELDS = new optionButton({


        x: 360,
        y: 250,
        width: 50,
        height: 20,
        color: color(219, 226, 13),
        label: "Fields",
        onClick: function() {
            Background = 2;
          
        }

    });

    var Difficultye = new optionButton({


        x: 120,
        y: 360,
        width: 70,
        height: 50,
        color: color(144, 234, 18),
        label: "Normal",
        onClick: function() {
            Difficulty = 1;
            
			AD = 20;
			playeronespeed = 3;
		playertwospeed = -3;
		SD = 5;
        }

    });

    var Difficultym = new optionButton({


        x: 250,
        y: 360,
        width: 70,
        height: 50,
        color: color(211, 229, 13),
        label: "Overkill",
        onClick: function() {
          AD = 50;
			playeronespeed = 10;
		playertwospeed = -10;
		SD = 10;
        }


    });


    var Difficultyh = new optionButton({


        x: 400,
        y: 360,
        width: 135,
        height: 50,
        color: color(244, 176, 66),
        label: "Death Sentence",
        onClick: function() {
            Difficulty = 3;
      	AD = 150;    
		SD = 150;
			playeronespeed = 15;
		playertwospeed = -15;
		
			
        }
    })            


		
    var purpleguy = new optionButton({


        x: 200,
        y: 130,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C2",
        onClick: function() {
			  Lexus.setImg(imgc2);
			
		}
    })
		
		
    var greenguy = new optionButton({


        x: 130,
        y: 130,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C1",
        onClick: function() {
				Lexus.setImg(imgc1);
		}
    })
		
		var redguy = new optionButton({


        x: 200,
        y: 180,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C4",
        onClick: function() {
			  Lexus.setImg(imgc4);
			
		}
    })
    
    var RealLexus = new optionButton({


        x: 130,
        y: 180,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C3",
        onClick: function() {
			  Lexus.setImg(imgc3);
			
		}
    })
			
    var purpleguy2 = new optionButton({


        x: 370,
        y: 130,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C2",
        onClick: function() {
				Bandit.setImg(imgc2);
		}
    })
		
    var redguy2 = new optionButton({


        x: 370,
        y: 180,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C4",
        onClick: function() {
			  Bandit.setImg(imgc4);
			
		}
    })
		
    var greenguy2 = new optionButton({


        x: 300,
        y: 130,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C1",
        onClick: function() {
				Bandit.setImg(imgc1);
		}
    })
		
    var RealLexus2 = new optionButton({


        x: 300,
        y: 180,
        width: 50,
        height: 30,
        color: color(88, 104, 226),
        label: "C3",
        onClick: function() {
			  Bandit.setImg(imgc3);
			
		}
    })
		
    var Next = new optionButton({
        x: 430,
        y: 460,
        width: 60,
        height: 20,
        color: color(255),
        label: "NEXT",
        onClick: function() {
            currentScene = 3;
            drawScene3();
         
        }


    });

    if (event === "click") {
       
        CITY.handleMouseClick();
        FIELDS.handleMouseClick();
        Difficultyh.handleMouseClick();
        Difficultym.handleMouseClick();
        Difficultye.handleMouseClick();
        Next.handleMouseClick();
				greenguy.handleMouseClick();
				greenguy2.handleMouseClick();
				purpleguy.handleMouseClick();
				purpleguy2.handleMouseClick();
      	redguy.handleMouseClick();
        RealLexus.handleMouseClick();
      redguy2.handleMouseClick();
      	RealLexus.handleMouseClick();
			
    } else {
        background(0, 0, 0);
        textSize(18);
        fill(250, 0, 0);
        text("Game Options", 250, 50);
        text("Select Character", 65, 90)
        text("Select Arena", 70, 220);
        text("Select Difficulty", 70, 300);
        textSize(15);
        text("Player 1", 170, 90);
        text("Player 2", 330, 90);
        stroke(255);
        line(250, 190, 250, 100);
        noStroke();
        Difficultyh.draw();
        Difficultym.draw();
        Difficultye.draw();
        CITY.draw();
        FIELDS.draw();
        Next.draw();
				purpleguy.draw();
      	redguy.draw();
      	RealLexus.draw();
				purpleguy2.draw();
				greenguy.draw();
				greenguy2.draw();
      	redguy2.draw();
      	RealLexus2.draw();
    }

    var mouseClicked = function() {
        CITY.handleMouseClick();
        FIELDS.handleMouseClick();
        Difficultyh.handleMouseClick();
        Difficultye.handleMouseClick();
        Difficultym.handleMouseClick();
        redguy.handleMouseClick();
        RealLexus.handleMouseClick();
			purpleguy.handleMouseClick();
				purpleguy2.handleMouseClick();
				greenguy.handleMouseClick();
				greenguy2.handleMouseClick();
      	redguy2.handleMouseClick();
      	RealLexus.handleMouseClick();
		}


};

var beam1=0;

var beam2=0;


function draw() {

    if (currentScene === 1) {
        drawScene1();

    }


    if (currentScene === 2) {
        drawScene2();

    }

    if (currentScene === 3) {
        drawScene3();
//lexus control
		if( isCharPressed('w') || isCharPressed('W') ) {
Lexus.hop();
} else {
Lexus.fall();
}
      
  		if( isCharPressed('d') || isCharPressed('D') ) {
Lexus.right();
}
  
  		if( isCharPressed('a') || isCharPressed('A') ) {
Lexus.left();
}
  
    		if( isCharPressed('q') || isCharPressed('Q') ) {
Lexus.startBeam();
}
Lexus.continueBeam();
  
    		if( isCharPressed('e') || isCharPressed('E') ) {
Lexus.drawSword();
}
      
//Bandit controls
		if( isCharPressed('i') || isCharPressed('I') ) {
Bandit.hop();
} else {
Bandit.fall();
}
      
  		if( isCharPressed('l') || isCharPressed('L') ) {
Bandit.right();
}
  
  		if( isCharPressed('j') || isCharPressed('J') ) {
Bandit.left();
}
  
    		if( isCharPressed('u') || isCharPressed('U') ) {
Bandit.startBeam();
}
Bandit.continueBeam();
  
    		if( isCharPressed('o') || isCharPressed('O') ) {
Bandit.drawSword();
}




			
	

    }




    if (keyIsPressed && keyCode === 13) {
        drawScene2();
    }



}

mouseClicked = function() {
    //	  console.log("Mouse was clicked");
    if (currentScene === 2) {
        drawScene2("click");
    }
};
