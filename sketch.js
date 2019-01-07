var currentScene = 1;

var img;
var img1;
var img2;
var img3;
var cnv;
var mrx = 0;
var mry = 0;
var mrx2 = 0;
var mry2 = 0;

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
    img1 = loadImage("pictures/grassland01a_soruve.png");
    img2 = loadImage("pictures/japan_street01.png");
    img3 = loadImage("pictures/download.png");

}
var beam = function() {
    rect(470, mry, 30, 100);
    fill(35, 211, 211);
    ellipse(mrx, mry, 40, 40);

    mrx -= random(15);

    if (mrx < -100) {

        mrx = 500;
        mry = random(0, 400);

    }
    fill(0);
    rect(0, mry2, 30, 100);
    fill(35, 211, 211);
    ellipse(mrx2, mry2, 40, 40);

    mrx2 += random(15);

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
            console.log("CITY has been clicked" + Background);
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
            console.log("FIELDS has been clicked" + Background);
        }

    });

    var Difficultye = new optionButton({


        x: 100,
        y: 360,
        width: 70,
        height: 50,
        color: color(144, 234, 18),
        label: "Normal",
        onClick: function() {
            Difficulty = 1;
            console.log("NORMAL has been clicked" + Difficulty);
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
            Difficulty = 2;
            console.log("OVERKILL has been clicked" + Difficulty);
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
            console.log("DEATH has been clicked" + Difficulty);
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
            //		console.log("NEXT: " + currentScene);
        }


    });

    if (event === "click") {
        //	console.log("scene2 click");
        CITY.handleMouseClick();
        FIELDS.handleMouseClick();
        Difficultyh.handleMouseClick();
        Difficultym.handleMouseClick();
        Difficultye.handleMouseClick();
        Next.handleMouseClick();
    } else {
        background(0, 0, 0);
        textSize(18);
        fill(250, 0, 0);
        text("Game Options", 250, 50);
				text("Character" ,50,90)
        text("Arena", 50, 200);
        text("Difficulty", 50, 300);
        text("Or", 260, 250);
        text("Or", 165, 360);
        text("Or", 300, 360);
				textSize(15);
				text("Player 1",170,90);
				text("Player 2",330,90);
				stroke(255);
				line(250,190,250,100);
				noStroke();
        Difficultyh.draw();
        Difficultym.draw();
        Difficultye.draw();
        CITY.draw();
        FIELDS.draw();
        Next.draw();
    }

    var mouseClicked = function() {
        CITY.handleMouseClick();
        FIELDS.handleMouseClick();
        Difficultyh.handleMouseClick();
        Difficultye.handleMouseClick();
        Difficultym.handleMouseClick();
        P1.handleMouseClick();
        P2.handleMouseClick();
    }


};




function draw() {

    if (currentScene === 1) {
        drawScene1();

    }


    if (currentScene === 2) {
        drawScene2();

    }

    if (currentScene === 3) {
        drawScene3();
        if (keyIsPressed) {
            console.log("KeyCode: " + keyCode);
        }

        // Up: w
        if (keyIsPressed && keyCode === 119) {
            Lexus.hop();
        } else {
            Lexus.fall();
        }

        // Up: o
        if (keyIsPressed && keyCode === 111) {
            Bandit.hop();
        } else {
            Bandit.fall();
        }
  
				if (keyIsPressed && keyCode === 101){
			
					Lexus.EnergyBeam2();
				
				}
			
				if (keyIsPressed && keyCode === 112){
					
				Bandit.EnergyBeam();
			
			
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
