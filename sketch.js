
var img;

function setup() {
  createCanvas(400, 400);

	img = loadImage("Community-game-James-John-Daniel/pictures/Startscreen.jpeg"); 
}

function draw() {  

}
var currentScene;

var drawScene1 =function(){
    currentScene = 1;

 background(100);
	fill(66, 134, 244);
	ellipse(210,300,50,50);
};

var drawScene5 =function(){
    currentScene = 5;

};

var drawScene2 = function(){
    currentScene = 2;
background(1,1,1);
image(img, 100, 100);
};


var drawScene3 = function(){
    currentScene = 3;


};

var drawScene4 = function(){
    currentScene = 4;


};

drawScene1();


mouseClicked=function(){
    if(currentScene === 1){
      drawScene2();  
    }
    else if(currentScene === 5){
     drawScene1();  
    }
     else if(currentScene === 2){
     drawScene3();  
    }
     else if(currentScene === 3){
     drawScene4 ();
     
     }
     else if(currentScene === 4){
     drawScene5 ();
     
     }
};
