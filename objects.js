// THESE ARE THE GLOBAL VARIABLES
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
var shield;
var cnv;
var mrx = 0;
var mry = 0;
var mrx2 = 0;
var mry2 = 0;
var Background = 0;
var PlayerNum = 0;
var AD = 0;
var SD = 0;
var SDN = 0;
var P1D = 5;
var P2D = -5;
var startscreenx = 200;
var startscreeny = 300;
var startscreenx2 = 110;
var startscreeny2 = 480;
var song1;
var song2;
var song3;


// THIS IS WHERE WE CENTER THE CANVAS
function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 0;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}



//HERE WE LOAD THE IMAGES AND DEFAULT THINGS
function setup() {

    cnv = createCanvas(500, 500);
    centerCanvas();
    background(0);
    img = loadImage("pictures/LogoMakr_1IBZ40.png");
    defaultbackground = loadImage("pictures/download.jpg");
    img1 = loadImage("pictures/grassland01a_soruve.png");
    img2 = loadImage("pictures/japan_street01.png");
    img3 = loadImage("pictures/Splash.png");
    imgp1w = loadImage("pictures/ShrekP1.jpg");
    imgp2w = loadImage("pictures/ShrekP2.jpg");
    imgc1 = loadImage("pictures/Player1.png");
    imgc2 = loadImage("pictures/Player2.png");
    imgc3 = loadImage("pictures/LEXUS.png");
    imgc4 = loadImage("pictures/Untitled-2.png")
    sword = loadImage("pictures/PoolNoodle.png");
    shield = loadImage("pictures/Wood_Metal_Shield.png");
      song1 = loadSound('Music/About Nothing.mp3');
     song2 = loadSound('Music/Defense Line.mp3');
 song3 = loadSound('Music/Platformer2.mp3');



    // Setting intial images for Characters
    Lexus.setImg(imgc3);
    Bandit.setImg(imgc1);
}


//THIS IS WHAT LETS US PRESS KEYS AT THE SAMETIME
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
    for (var i = 0; i < pressedKeys.length; i++) {

        if (pressedKeys[i] === aKey)
            return true;
    }

    return false;
}

function ascii(a) {
    return a.charCodeAt(0);
}

function getNumberArray(arr) {
    var newArr = new Array();
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

//HERE IS THE CLASS OF BUTTON
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

//HERE IS THE CLASS FOR ENERGYBEAM
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
//STARTS BEAM
EnergyBeam.prototype.startBeam = function(player) {
    this.X = player.x + 25;
    this.Y = player.y + 30;
    this.started = 1;

}
//SETS DIRECTION OF BEAM RELATIVE TO OPPONENT
EnergyBeam.prototype.setDirection = function(newDirection) {
    this.direction = newDirection;

}
//DRAWS ENERGYBEAM
EnergyBeam.prototype.draw = function() {
    if (this.started > 0) {

        fill(this.R, this.G, this.B);
        ellipse(this.X, this.Y, 20, 20);
        this.X += this.direction;
    }
    
    if (this.direction > 0 && this.X > this.xLimit) {

        
        this.reset();
    }
    
    if (this.direction < 0 && this.X < this.xLimit) {

        
        this.reset();
    }


}
//RESETS POSITION OF ENERGYBEAM
EnergyBeam.prototype.reset = function() {
    this.started = 0;
    this.X = this.startX;
    this.Y = this.startY;
}



//HERE IS THE CLASS FOR CHARACTERS
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
    this.SPX = config.SPX;
    this.SPY = config.SPY;
    this.SH = config.SH;
    this.SW = config.SW;
    this.blocking = false;

};
//DRAWS THE CHARACTER
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

    if (Bandit.hp <= 0) {
        currentScene = 6;
        drawScene6();
    }

};
//CHARACTER RIGHT
character.prototype.right = function() {


    this.x += 7;


}
//CHARACTER LEFT
character.prototype.left = function() {



    this.x -= 7;

}
//CHARACTER UP
character.prototype.hop = function() {

    if (this.y >= this.h) {
        this.y -= 7;
    }

};

//CHARACTER DOWN
character.prototype.fall = function() {

    if (this.y <= (500 - this.h)) {
        this.y += 5;
    }


};
//SETS OPPONENT OF CHARACTER
character.prototype.setOpponent = function(theOpponent) {
    this.opponent = theOpponent;
};
//HELPS TO CHANGE THE IMAGE OF THE CHARACTER
character.prototype.setImg = function(anImage) {

    this.img = anImage;
};

//STARTS THE ENERGYBEAM
character.prototype.startBeam = function() {
    this.energyBeam.startBeam(this);
};
//KEEPS THE BEAM GOING
character.prototype.continueBeam = function() {

    // When should this continue/stop
    this.energyBeam.draw();

    if (this.energyBeam.started > 0) {

        if (this.energyBeam.X >= this.opponent.x && this.energyBeam.X <= (this.opponent.x + 50))
            if (this.energyBeam.Y >= this.opponent.y && this.energyBeam.Y <= (this.opponent.y + 100)) {
                this.opponent.hp -= AD;

                // Scoring is done, end the beam
                this.energyBeam.reset();
            }
    }

};


//CODE FOR THE SHIELD
character.prototype.raiseShield = function() {
    this.blocking = true;
    this.BX = this.x;
    this.BY = this.y + 30;
    this.BW = 50;
    this.BH = 50;
    image(shield, this.BX, this.BY, this.BW, this.BH);
    //console.log("Shield X is:" + this.BX);
    //console.log("Shield y is:" + this.BY);
};

character.prototype.lowerShield = function() {
    this.blocking = false;
};
//CODE FOR FACING THE OPPONENT
character.prototype.faceopponent = function() {
    if (this.opponent.x <= this.x) {
        this.SPX = -100;
        this.energyBeam.setDirection(-5);
        this.xLimit = 0;
        //console.log("shoot backwards")
    }
    if (this.opponent.x >= this.x) {
        this.SPX = 25;
        this.energyBeam.setDirection(5);
        this.xLimit = 500;
        //console.log("shoot forwards")
    }
};

//DRAWS AND MAKES HITBOXES FOR SWORDS
character.prototype.drawSword = function(player) {
    this.SX = this.x + this.SPX;
    this.SY = this.y + this.SPY;
    image(sword, this.SX, this.SY, this.SW, this.SH);
    if (this.SX <= this.opponent.x && (this.SX + 100) >= this.opponent.x) {
        if (this.SY >= this.opponent.y && this.SY <= (this.opponent.y + 100)) {

            this.opponent.hp -= SD;
        }
    }
    //console.log("drawingsword")

    if (this.opponent.blocking === true && this.SX <= this.opponent.BX && (this.SX + 100) >= this.opponent.BX && this.SY >= this.opponent.BY && this.SY <= (this.opponent.BY + 100)) {
        SD = 0;
        //       console.log("your puny sword is useless")
    } else {
        console.log("SND is:" + SDN)
        if (SDN === 1) {
            SD = 5;
            //console.log("your sword does five damage")
        }

        if (SDN === 2) {
            SD = 10;
            //console.log("your sword does ten damage")
        }


        if (SDN === 3) {
            SD = 100;
            //console.log("your sword does a lot of damage")
        }
        //console.log("SND is:" + SDN)
        //console.log("SD is:" + SD)

        if (SDN === 4) {
            SD = 5;
        }

        if (SDN === 5) {
            SD = 10;

        }

        if (SDN === 5) {
            SD = 20;

        }

        if (SDN === 6) {
            SD = 40;

        }
        if (SDN === 7) {
            SD = 60;

        }
        if (SDN === 8) {
            SD = 80;

        }
        if (SDN === 9) {
            SD = 100;

        }

        if (SDN === 10) {
            SD = 120;

        }
        if (SDN === 11) {
            SD = 140;

        }
        if (SDN === 12) {
            SD = 150;

        }
    }
};



//CHARACTER INSTANCES
var Lexus = new character({
    name: 'Lexus',
    color: 'red',
    x: 50,
    y: 190,
    w: 50,
    h: 150,
    img: imgc1,
    SPX: 25,
    SPY: 30,
    SW: 100,
    SH: 50,
    hp: 150,
    hy: 30,
    hx: 100,


    energyBeam: new EnergyBeam({
        name: 'lexusBeam',
        R: 10,
        G: 201,
        B: 195,
        Y: 400,
        X: 120,
        xLimit: 500,
        direction: 0
    })

})

var Bandit = new character({
    name: 'Bandit',
    x: 400,
    y: 190,
    w: 50,
    h: 150,
    img: imgc2,
    SW: 100,
    SH: 50,
    SPX: -100,
    SPY: 30,
    hp: 150,
    hy: 30,
    hx: 400,
    energyBeam: new EnergyBeam({
        name: 'banditBeam',
        R: 252,
        G: 7,
        B: 48,
        Y: 400,
        X: 385,
        xLimit: 0,
        direction: 0
    })

})

//SETS OPPONENTS FOR INSTANCES OF CHARACTERS
Lexus.setOpponent(Bandit);
Bandit.setOpponent(Lexus);
