//THIS IS THE CODE FOR THE FUNCTION WHERE THE CHARACTERS SHOOT ENERGYBEAMS
var beam = function() {
    image(imgc1, 470, mry, 30, 100);
    fill(35, 211, 211);
    ellipse(mrx, mry, 40, 40);

    mrx -= 10;

    if (mrx < -100) {

        mrx = 500;
        mry = random(0, 400);

    }
    fill(0);
    image(imgc3, 0, mry2, 30, 100);
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

//THIS DRAWS THE START MENU
var drawScene1 = function() {
    currentScene = 1;
    background(255);
    image(img, 100, 150, 300, 120);
    fill(0);
    text("Press Enter to Start!", startscreenx, startscreeny);
    text("Made by John Khalife, Daniel Figotin and James Yee", startscreenx2, startscreeny2);
    beam();
    
};
//THIS DRAWS THE ACTUAL GAME PART (THE NUMBERED SCENES ARE NOT IN ORDER)
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
    Lexus.faceopponent();
    Bandit.faceopponent();
};

//THIS DRAWS THE PLAYERONEWINSSCENE
var drawScene5 = function() {
    currentScene = 5;
    background(150, 150, 175);
    image(imgp2w, 0, 0, 500, 500);

};
//THIS DRAWS THE PLAYERTWOWINSSCENE
var drawScene6 = function() {
    currentScene = 6;
    background(150, 150, 175);
    image(imgp1w, 0, 0, 500, 500);

};
//THIS DRAWS THE OPTIONS PAGE
var drawScene2 = function(event) {

    currentScene = 2;
   


//THESE ARE THE INSTANCES OF OUR BUTTON CLASS
    var CITY = new optionButton({


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
            SDN = 1;
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
            SDN = 2;
        }


    });


    var Difficultyh = new optionButton({


        x: 400,
        y: 360,
        width: 135,
        height: 50,
        color: color(244, 176, 66),
        label: "impossible mode",
        onClick: function() {
            Difficulty = 3;
            AD = 150;
            SD = 100;
            playeronespeed = 15;
            playertwospeed = -15;
            SDN = 3;

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
    var RestartButton = new optionButton({


        x: 50,
        y: 460,
        width: 70,
        height: 30,
        color: color(88, 104, 226),
        label: "Restart",
        onClick: function() {
            Background = 0;
            Bandit.hp = 150;
            Lexus.hp = 150;
            Bandit.x = 400;
            Bandit.y = 190;
            Lexus.x = 50;
            Lexus.y = 190;
            currentScene = 1;
            textSize(12);
            startscreenx = 245;
            startscreenx2 = 240;
            drawScene1();
            //

        }
    })


    var Custommode = new optionButton({


        x: 250,
        y: 460,
        width: 100,
        height: 30,
        color: color(88, 104, 226),
        label: "advanced",
        onClick: function() {
            currentscene = 7;
            drawScene7();
        }
    })
      
    if (event === "click") {
        Custommode.handleMouseClick();
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
        RestartButton.handleMouseClick();
    } else {
        //THIS IS WHERE WE DRAW THE BUTTONS AND TEXT
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
        RestartButton.draw();
        Custommode.draw();
        beam();
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
        RestartButton.handleMouseClick();
        Custommode.handleMouseClick();
    }


};

//THIS IS THE CUSTOM MODE SCENE
var drawScene7 = function(event) {

    currentScene = 7;


//HERE ARE THE INSTANCES OF BUTTONS AGAIN
    var B5 = new optionButton({


        x: 80,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "5",
        onClick: function() {
            AD = 5;
        }
    })

    var B10 = new optionButton({


        x: 110,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "10",
        onClick: function() {
            AD = 10;
        }
    })

    var B20 = new optionButton({


        x: 140,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "20",
        onClick: function() {
            AD = 20;
        }
    })

    var B40 = new optionButton({


        x: 170,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "40",
        onClick: function() {
            AD = 40;
        }
    })

    var B60 = new optionButton({


        x: 200,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "60",
        onClick: function() {
            AD = 60;
        }
    })

    var B80 = new optionButton({


        x: 230,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "80",
        onClick: function() {
            AD = 80;
        }
    })

    var B100 = new optionButton({


        x: 260,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "100",
        onClick: function() {
            AD = 100;
        }
    })

    var B120 = new optionButton({


        x: 290,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "120",
        onClick: function() {
            AD = 120;
        }
    })

    var B140 = new optionButton({


        x: 320,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "140",
        onClick: function() {
            AD = 140;
        }
    })


    var B150 = new optionButton({


        x: 350,
        y: 140,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "150",
        onClick: function() {
            AD = 150;
        }
    })

    //sword damage

    var S5 = new optionButton({


        x: 80,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "5",
        onClick: function() {
            SD = 5;
            SDN = 4;
        }
    })

    var S10 = new optionButton({


        x: 110,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "10",
        onClick: function() {
            SD = 10;
            SDN = 5;

        }
    })

    var S20 = new optionButton({


        x: 140,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "20",
        onClick: function() {
            SD = 20;
            SDN = 6;
        }
    })

    var S40 = new optionButton({


        x: 170,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "40",
        onClick: function() {
            SD = 40;
            SDN = 7;
        }
    })

    var S60 = new optionButton({


        x: 200,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "60",
        onClick: function() {
            SD = 60;
            SDN = 8;
        }
    })

    var S80 = new optionButton({


        x: 230,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "80",
        onClick: function() {
            SD = 80;
            SDN = 9;
        }
    })

    var S100 = new optionButton({


        x: 260,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "100",
        onClick: function() {
            SD = 100;
            SDN = 10;
        }
    })

    var S120 = new optionButton({


        x: 290,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "120",
        onClick: function() {
            SD = 120;
            SDN = 11;
        }
    })

    var S140 = new optionButton({


        x: 320,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "140",
        onClick: function() {
            SD = 140;
            SDN = 11;
        }
    })


    var S150 = new optionButton({


        x: 350,
        y: 240,
        width: 30,
        height: 30,
        color: color(88, 104, 226),
        label: "150",
        onClick: function() {
            SD = 150;
            SDN = 12;
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
            currentScene = 2;
            drawScene2();

        }


    });
    var RestartButton = new optionButton({


        x: 130,
        y: 460,
        width: 70,
        height: 30,
        color: color(88, 104, 226),
        label: "Restart",
        onClick: function() {
            Background = 0;
            Bandit.hp = 150;
            Lexus.hp = 150;
            Bandit.x = 400;
            Bandit.y = 190;
            Lexus.x = 50;
            Lexus.y = 190;
            //

        }
    })




    if (event === "click") {

        B5.handleMouseClick();
        B10.handleMouseClick();
        B20.handleMouseClick();
        B40.handleMouseClick();
        B60.handleMouseClick();
        B80.handleMouseClick();
        B100.handleMouseClick();
        B120.handleMouseClick();
        B140.handleMouseClick();
        B150.handleMouseClick();
        S5.handleMouseClick();
        S10.handleMouseClick();
        S20.handleMouseClick();
        S40.handleMouseClick();
        S60.handleMouseClick();
        S80.handleMouseClick();
        S100.handleMouseClick();
        S120.handleMouseClick();
        S140.handleMouseClick();
        S150.handleMouseClick();
        Next.handleMouseClick();
        RestartButton.handleMouseClick();

    } else {
        //HERE WE DRAW IT AGAIN
        background(0, 0, 0);
        textSize(18);
        fill(250, 0, 0);
        text("Custom mode", 250, 50);
        textSize(18);
        fill(250, 0, 0);
        text("Beam Damage", 65, 100);

        text("Sword Damage", 70, 200);
        textSize(12);
        text("Note *when using sword it will do its damage once before blocking.", 200, 300);
        text("That means it is an instant kill if you do 150 damage for sword damage.", 200, 330);
        text("Also, 150 is how much health you have", 200, 360);



        noStroke();
        RestartButton.draw();
        Next.draw();
        B5.draw();
        B10.draw();
        B20.draw();
        B40.draw();
        B60.draw();
        B80.draw();
        B100.draw();
        B120.draw();
        B140.draw();
        B150.draw();
        S5.draw();
        S10.draw();
        S20.draw();
        S40.draw();
        S60.draw();
        S80.draw();
        S100.draw();
        S120.draw();
        S140.draw();
        S150.draw();
        beam();
    }

    var mouseClicked = function() {
        Next.handleMouseClick();
        RestartButton.handleMouseClick();
        B5.handleMouseClick();
        B10.handleMouseClick();
        B20.handleMouseClick();
        B40.handleMouseClick();
        B60.handleMouseClick();
        B80.handleMouseClick();
        B100.handleMouseClick();
        B120.handleMouseClick();
        B140.handleMouseClick();
        B150.handleMouseClick();
        S5.handleMouseClick();
        S10.handleMouseClick();
        S20.handleMouseClick();
        S40.handleMouseClick();
        S60.handleMouseClick();
        S80.handleMouseClick();
        S100.handleMouseClick();
        S120.handleMouseClick();
        S140.handleMouseClick();
        S150.handleMouseClick();

    }


};


var beam1 = 0;

var beam2 = 0;


function draw() {
//HERE WE CALL THE DRAWING OF THE SCENES
    if (currentScene === 1) {
        drawScene1();

    }


    if (currentScene === 2) {
        drawScene2();

    }

    if (currentScene === 7) {
        drawScene7();
    }

    if (keyIsPressed && keyCode === 13) {
        drawScene2();
    }
    
    if (currentScene === 3) {
        drawScene3();
        

        
        //HERE ARE THE CONTROLS FOR THE CHARACTERS
        //PLAYER ONE CONTROLS(PLAYER ONE IS CALLED LEXUS)
        if (isCharPressed('w') || isCharPressed('W')) {
            Lexus.hop();
        } else {
            Lexus.fall();
        }

        if (isCharPressed('d') || isCharPressed('D')) {
            Lexus.right();
        }

        if (isCharPressed('a') || isCharPressed('A')) {
            Lexus.left();
        }

        if (isCharPressed('q') || isCharPressed('Q')) {
            Lexus.startBeam();
        }
        Lexus.continueBeam();

        if (isCharPressed('e') || isCharPressed('E')) {
            Lexus.drawSword();
        }

        if (isCharPressed('s') || isCharPressed('S')) {
            Lexus.raiseShield();
        } else {
            Lexus.lowerShield();
        }

        //PLAYER 2 CONTROLS(PLAYER TWO IS CALLED BANDIT)
        if (isCharPressed('i') || isCharPressed('I')) {
            Bandit.hop();
        } else {
            Bandit.fall();
        }

        if (isCharPressed('l') || isCharPressed('L')) {
            Bandit.right();
        }

        if (isCharPressed('j') || isCharPressed('J')) {
            Bandit.left();
        }

        if (isCharPressed('u') || isCharPressed('U')) {
            Bandit.drawSword();
        }

        if (isCharPressed('o') || isCharPressed('O')) {
            Bandit.startBeam();
        }
        Bandit.continueBeam();

        if (isCharPressed('k') || isCharPressed('K')) {
            Bandit.raiseShield();
        } else {
            Bandit.lowerShield();
        }
//ADDING START AND STOP MUSIC

        if (isCharPressed('v') || isCharPressed('V')) {
          song.play();
        }
        
        if (isCharPressed('b') || isCharPressed('B')) {
          song.pause();
        }
        



    }




}

mouseClicked = function() {

    if (currentScene === 2) {
        drawScene2("click");
    }
    if (currentScene === 7) {
        drawScene7("click");
    }
};
